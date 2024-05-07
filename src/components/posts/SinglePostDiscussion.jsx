import React from 'react'
import usePost from '../../store/usePost'
import SinglePost from './SinglePost';
import { useParams } from 'react-router-dom';
import useGetAPost from '../../hooks/posts/useGetAPost';
import CommentContainer from './CommentContainer';


const SinglePostDiscussion = ({postId}) => {
    // console.log("Here in single post discussion")
    // // const {selectedPost} = usePost();
    
    // if (!postId) return <div>Post ID is missing</div>
    // const {selectedPost} = usePost();
    console.log("in single post dis post ID: ", postId)
    const {loading, selectedPost} = useGetAPost(postId);
    console.log("single post discussion", selectedPost); 
    console.log("single post discussion 2", selectedPost);
    
    return (
        <div className='bg-gray-900 min-w-[420px] max-w-[480px] py-2 flex flex-col gap-4 items-center min-h-full max-h-[1140px] overflow-scroll overflow-x-hidden scrollbar-hide'>
            <div className=' w-full'>
                <h1 className="chat-header text-3xl text-orange-100 font-bold pt-2 pl-2 ">Post Discussion</h1>
            </div>
            <SinglePost 
                post={selectedPost}
            />

            <CommentContainer />

        </div>
    )
}

export default SinglePostDiscussion