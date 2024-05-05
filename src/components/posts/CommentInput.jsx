import React, { useState } from 'react'
import { BsSend } from "react-icons/bs"
import { useAuthContext } from '../../context/AuthContext';
import usePostComment from '../../hooks/posts/usePostComment';

const CommentInput = () => {
    const [comment, setComment] = useState("");
    const {authUser} = useAuthContext();
    const {loading, postComment} = usePostComment();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(comment === "") return;
        postComment(comment);
        setComment("");
    }

    return (
        <div className='w-full p-1'>
            <form className='w-full mt-3 flex items-center gap-1' onSubmit={handleSubmit}>
                <div className='w-12 rounded-full'>
                    <img src={authUser.profilePicUrl} alt="chat bubble" className="rounded-full" />
                </div>
                <div className='w-full relative flex items-center'>
                    <input
                        type="text"
                        className='border text-sm rounded-lg block w-[340px] p-2 bg-orange-50 text-black'
                        placeholder='Post a comment'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'><BsSend /></button>
                </div>
            </form>
        </div>
    )
}

export default CommentInput