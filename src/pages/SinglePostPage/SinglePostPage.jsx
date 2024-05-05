import React from 'react'
import { useEffect } from 'react'
import MessageContainer from '../../components/messages/MessageContainer'
import ConversationContainer from '../../components/conversations/ConversationContainer'
// import useRefreshToken from '../../hooks/auth/useRefreshToken'
// import useSpotifyWebPlayback from '../../hooks/spotify/useSpotifyWebPlayback'
import Player from '../../components/tracks/Player'
import PostsContainer from '../../components/posts/PostsContainer'
import { useParams } from 'react-router-dom'
import SinglePostDiscussion from '../../components/posts/SinglePostDiscussion'
import useGetAPost from '../../hooks/posts/useGetAPost'
import usePost from '../../store/usePost'


const SinglePostPage = () => {
    const { postId } = useParams();
    // const{selectedPost, loading} = useGetAPost(postId);
    const {selectedPost} = usePost();
    console.log("in single post page: ", selectedPost);

    useEffect(() => {
        console.log( "single post page effect" )
    }, [])

    
    
    // console.log("in single post page:", selectedPost);


    return (
        <div className='w-full flex flex-auto gap-4 justify-center'>

            <div className=' w-80 '>
                <div className='sticky top-10'>
                    <Player />
                </div>

            </div>

            <SinglePostDiscussion postId={postId}/>


            <div className='flex flex-col items-center'>
                <ConversationContainer />
                <div className='divider p-3'></div>
                <MessageContainer />
            </div>


        </div>
    )
}

export default SinglePostPage