import React from 'react'
import { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext'
import { GoHeart, GoHeartFill, GoCommentDiscussion, GoStar, GoStarFill } from "react-icons/go";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const SinglePost = () => {
    const { authUser } = useAuthContext();
    const [liked, setLiked] = useState(false);
    const [favorite, setFavorite] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked);
    };

    const handleFavorite = () => {
        setFavorite(!favorite);
    }

    return (
        <div className='card p-4 w-11/12 bg-base-100 shadow-xl'>
            {/* Post Owner Section */}
            <div className='card-title items-center pb-2 px-2 justify-between'>
                <div className='flex flex-auto items-center'>
                    <div className='avatar'>
                        <div className='w-14 rounded-full'>
                            <img src={authUser.profilePicUrl} alt="chat bubble" />
                        </div>
                    </div>
                    <div className='pl-3 flex flex-col justify-center text-orange-100 opacity-85'>
                        <p>{authUser.firstName} {authUser.lastName}</p>
                        <span className="opacity-70 text-orange-50 text-xs font-light font-['Inter']">3 days ago</span>
                    </div>
                </div>

                <div className='items-center'>
                    <IoChatbubbleEllipsesOutline className='text-3xl transition-all duration-300 transform hover:scale-110'/>
                </div>

            </div>
            <div className='py-px p-1 px-2 justify-start items-start inline-flex'>
                <div className="text-white text-base font-medium font-['Inter'] leading-normal opacity-90">
                    Chilling in the field
                </div>
            </div>
            {/* Post Picture Section */}
            <figure className="px-2 py-2">
                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-lg" />
            </figure>

            {/* Track Section */}
            <div className='mx-2 my-1 px-3 py-1 bg-gradient-to-r from-teal-700 to-neutral-900 rounded-lg flex items-center justify-between'>
                <div className='flex items-center'>
                    <div className='w-16'>
                        <img src='https://i.scdn.co/image/ab67616d0000b273cb76604d9c5963544cf5be64' alt='artist_img' />
                    </div>
                    <div className='flex flex-col ml-2'>
                        <span className="w-52 text-orange-50 text-sm font-bold font-['Inter'] leading-snug truncate">Video Games Video Games</span>
                        <span className="opacity-65 text-orange-50 text-xs font-normal font-['Inter'] leading-normal">Lana Del Rey</span>

                    </div>
                </div>

                <div className='inline-flex gap-3'>
                    <button className='ml-3 focus:outline-none'>
                        <FaHeadphonesSimple className='text-lg transition-all duration-300 transform hover:scale-110' />
                    </button>
                    <button className='focus:outline-none' onClick={handleFavorite}>
                        {favorite ? <GoStarFill className='text-yellow-400 text-lg transition-all duration-300 transform hover:scale-110' /> : <GoStarFill className='text-lg transition-all duration-300 transform hover:scale-110' />}
                    </button>

                </div>

            </div>

            {/* Post Control Section */}
            <div className='pl-1 mx-1 py-1 flex items-center justify-start'>
                <button className='focus:outline-none' onClick={handleLikeClick}>
                    {liked ? <GoHeartFill className='text-emerald-500 text-lg transition-all duration-300 transform hover:scale-110' /> : <GoHeart className='text-lg transition-all duration-300 transform hover:scale-110' />}
                </button>
                <button className='ml-3 focus:outline-none'>
                    <GoCommentDiscussion className='text-lg transition-all duration-300 transform hover:scale-110' />
                </button>
                <div className='w-full text-right pr-2'>
                    <p>30<span className='font-semibold'> Likes</span></p>
                </div>

            </div>


        </div>
    )
}

export default SinglePost