import React, { useEffect } from 'react'
import { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext'
import { GoHeart, GoHeartFill, GoCommentDiscussion, GoStar, GoStarFill } from "react-icons/go";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import useLikePost from '../../hooks/posts/useLikePost';
import useGetAPost from '../../hooks/posts/useGetAPost';
import useTrack from '../../store/useTrack';
import usePost from '../../store/usePost';
import axios from 'axios';
import useFavortieTrack from '../../hooks/spotify/useFavortieTrack';
import useCreateConversation from '../../hooks/conversation/useCreateConversation';
import useFindConversation from '../../hooks/conversation/useFindConversation';
import { useNavigate } from 'react-router-dom';
import { formatDateTime } from '../../utils/formatDateTime';

const SinglePost = (post) => {
    if(!post.post) {
        console.log("no post here")
        return <div></div>}
    const  navigate = useNavigate();
    let postData = post.post;
    if(!postData) console.log("is post.post?", false)
    console.log("insinglepost: ", post)
    const { authUser } = useAuthContext();
    const { setSelectedTrack } = useTrack();
    const { setSelectedPost, selectedPost } = usePost();
    const postOwner = postData.user;
    const postTrack = postData.track;
    const postDate = formatDateTime(postData.createdAt);
    const [liked, setLiked] = useState(false);
    // const [favorite, setFavorite] = useState(false);
    const [likesCount, setLikesCount] = useState(postData.likesCount);
    const { likePost, removeLikePost, loading } = useLikePost();
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const { isFav, makeFavoriteTrack, removeFavoriteTrack } = useFavortieTrack(postTrack.spotifyId);
    const { createCoversation } = useCreateConversation();
    const { findConversation } = useFindConversation();

    useEffect(() => {
        // setLikeCount(postData.likeCount)
        // checkFavoriteTrack(postTrack.spotifyId);
        const checkIfLiked = async () => {
            try {
                const res = await axios.get(`${BACKEND_URL}/api/posts/${postData.postId}/isLiked/${authUser.userId}`, {
                    withCredentials: true
                })
                if (res) setLiked(res.data);
            } catch (error) {
                console.log("error on retrieving like: ", error.message)
            }
        }
        checkIfLiked();

    }, [])

    const handleLikeClick = async () => {
        if (liked) {
            await removeLikePost(postData.postId);
            setLiked(false);
            setLikesCount(likesCount - 1);
        } else {
            await likePost(postData.postId);
            setLiked(true);
            setLikesCount(likesCount + 1)
        }
    };

    const handleFavorite = () => {
        // WILL EFFECT user's spotify library.
        if (isFav) {
            removeFavoriteTrack();
        } else {
            makeFavoriteTrack();
        }
    }

    const handlePlayTrack = () => {
        setSelectedTrack(postTrack);
    }

    const handleConversation = async () => {
        const found = await findConversation(postOwner.userId);
        // setSelectedConversation(found);
        if (!found) createCoversation(postOwner);
    }

    const handleSetPost = async () => {
        // await setSelectedPost(post);
        // console.log(selectedPost);

        console.log("go to post")
        navigate(`/post/${postData.postId}`);

    }

    return (
        <div className='card p-4 w-11/12 bg-base-100 shadow-xl min-w-[400px] max-w-[400px]'>
            {/* Post Owner Section */}
            <div className='card-title items-center pb-2 px-2 justify-between'>
                <div className='flex flex-auto items-center'>
                    <div className='avatar'>
                        <div className='w-14 rounded-full'>
                            <img src={postOwner.profilePicUrl} alt="chat bubble" />
                        </div>
                    </div>
                    <div className='pl-3 flex flex-col justify-center text-orange-100 opacity-85'>
                        <p>{postOwner.firstName} {postOwner.lastName}</p>
                        <span className="opacity-70 text-orange-50 text-xs font-light font-['Inter']">{postDate}</span>
                    </div>
                </div>
                {postOwner.userId !== authUser.userId && (<div>
                    <button onClick={handleConversation} className='items-center'>
                        <IoChatbubbleEllipsesOutline className='text-3xl transition-all duration-300 transform hover:scale-110' />
                    </button>
                </div>)}


            </div>

            {/* Post Text Section */}
            <div className='py-px p-1 px-2 justify-start items-start inline-flex'>
                <div className="text-white text-base font-medium font-['Inter'] leading-normal opacity-90">
                    {postData.bodyText}
                </div>
            </div>
            {/* Post Picture Section */}
            {postData.photoUrl ? <div>
                <figure className="px-2 py-2">
                    <img src={postData.photoUrl} alt="Post photo" className="rounded-lg" />
                </figure>
            </div> : <div className='mb-3'> </div>}


            {/* Track Section */}
            <div className='mx-2 my-1 px-3 py-1 bg-gradient-to-r from-teal-700 to-neutral-900 rounded-lg flex items-center justify-between'>
                <div className='flex items-center'>

                    <div className='w-16'>
                        <img src={postTrack.coverPicUrl} alt='artist_img' />
                    </div>

                    <div className='flex flex-col ml-2'>
                        <span className="max-w-36 text-orange-50 text-sm font-bold font-['Inter'] leading-snug truncate">{postTrack.name}</span>
                        <span className="opacity-65 text-orange-50 text-xs font-normal font-['Inter'] leading-normal">{postTrack.artist}</span>

                    </div>
                </div>

                <div className='inline-flex gap-3'>
                    <button onClick={handlePlayTrack} className='ml-3 focus:outline-none'>
                        <FaHeadphonesSimple className='text-lg transition-all duration-300 transform hover:scale-110' />
                    </button>
                    <button className='focus:outline-none' onClick={handleFavorite}>
                        {isFav ? <GoStarFill className='text-yellow-400 text-lg transition-all duration-300 transform hover:scale-110' /> : <GoStar className='text-lg transition-all duration-300 transform hover:scale-110' />}
                    </button>

                </div>

            </div>

            {/* Post Control Section */}
            <div className='pl-1 mx-1 py-1 flex items-center justify-start'>
                <button className='focus:outline-none' onClick={handleLikeClick}>
                    {liked ? <GoHeartFill className='text-emerald-500 text-lg transition-all duration-300 transform hover:scale-110' /> : <GoHeart className='text-lg transition-all duration-300 transform hover:scale-110' />}
                </button>
                <button onClick={handleSetPost} className='ml-3 focus:outline-none'>
                    <GoCommentDiscussion className='text-lg transition-all duration-300 transform hover:scale-110' />
                </button>
                <div className='w-full text-right pr-2'>
                    <p>{likesCount}<span className='font-semibold'> Likes</span></p>
                </div>

            </div>


        </div>
    )
}

export default SinglePost