import React from 'react'
import { formatDateTime } from '../../utils/formatDateTime';

const Comment = ({comment}) => {
    const commentData = comment;
    const commentDate = formatDateTime(commentData.createdAt)
    console.log('This is comment data', commentData)
    return (
        <div className={`chat chat-start`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src={commentData.user.profilePicUrl} alt="chat bubble" />
                </div>
            </div>
            <div className={`chat-bubble  bg-zinc-800 pb-2 max-w-96`}>
                <div className='chat-header text-base text-orange-300 font-semibold'>
                    {commentData.user.userName}
                </div>
                
                <div className='text-slate-300 text-sm '>
                    {commentData.text}
                </div>
                
            
            </div>
            <div className='chat-footer opacity-75 text-xs flex gap-1 items-center'>{commentDate}</div>

        </div>
    )
}

export default Comment