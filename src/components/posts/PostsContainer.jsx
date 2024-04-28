import React from 'react'
import SinglePost from './SinglePost'
import './style.css'

const PostsContainer = () => {

    return (
        <div className='bg-gray-900 w-[30rem] py-2 flex flex-col gap-4 items-center max-h-[1080px] overflow-scroll overflow-x-hidden scrollbar-hide'>
            <SinglePost />
            <SinglePost />
            <SinglePost />
        </div>
    )
}

export default PostsContainer