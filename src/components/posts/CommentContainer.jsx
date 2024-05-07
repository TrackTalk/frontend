import React, { useEffect, useRef } from 'react'
import Comment from './Comment'
import usePost from '../../store/usePost'
import './style.css'
import CommentInput from './CommentInput'

const CommentContainer = () => {
    const { selectedPost, comments } = usePost();
    const lastCommentRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            lastCommentRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100)
    }, [comments])
    console.log("They are the comments: ", comments)
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className=' w-full'>
                <h1 className="chat-header text-2xl text-orange-100 font-bold px-2 pb-2">Comments</h1>
            </div>
            {
                comments.length == 0 ? <div className='w-[95%] p-4 bg-slate-700 rounded-md justify-center'>
                    <span className='text-sm'>
                    No comments yet! Be the first to comment below.
                    </span>
                    
                </div> :
                    <div className='w-[95%] p-4 bg-slate-700 rounded-md justify-center max-h-[460px] overflow-scroll overflow-x-hidden '>
                        {comments.length > 0 &&
                            comments.map((comment) => {
                                return (
                                    <div key={comment.commentId} ref={lastCommentRef}>
                                        <Comment comment={comment} />
                                    </div>
                                )
                            })
                        }

                    </div>
            }


            <div className=''>
                <CommentInput />
            </div>

        </div>
    )

}

export default CommentContainer