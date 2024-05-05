import React from 'react'
import SinglePost from './SinglePost'
import './style.css'
import useGetPosts from '../../hooks/posts/useGetPosts'

const PostsContainer = () => {

    const { loading, posts } = useGetPosts();
    console.log(posts)

    return (
        <div className='w-full bg-gray-900 min-w-[420px] max-w-[480px] py-2 flex flex-col gap-4 items-center max-h-[1080px] overflow-scroll overflow-x-hidden scrollbar-hide'>
            {
                posts.map((post) => {
                    return (
                        <SinglePost
                            key={post.postId}
                            post={post}
                        />
                    )
                })
            }
            {loading ? <span className='loading loading-spinner mx-auto'></span> : null}

        </div>
    )
}

export default PostsContainer