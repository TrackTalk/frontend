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
import LeftPane from '../../components/pane/LeftPane'
import RightPane from '../../components/pane/RightPane'


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

            <LeftPane />

            <SinglePostDiscussion postId={postId}/>


            <RightPane />


        </div>
    )
}

export default SinglePostPage