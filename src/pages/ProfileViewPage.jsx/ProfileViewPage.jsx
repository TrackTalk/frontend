import React from 'react'
import LeftPane from '../../components/pane/LeftPane'
import RightPane from '../../components/pane/RightPane'
import PostsContainer from '../../components/posts/PostsContainer'
import UserPicPane from '../../components/pane/UserPicPane'
import LeftPaneUserProfile from '../../components/pane/LeftPaneUserProfile'
import useGetUserPost from '../../hooks/posts/useGetUserPost'
import { useParams } from 'react-router-dom'

const ProfileViewPage = () => {
    const {userId} = useParams();
    const {posts, postOwner} = useGetUserPost(userId);
    console.log(postOwner);
    return (
        <div className='flex flex-col'>
            <UserPicPane profile={postOwner} />
            <div className='w-full flex flex-auto gap-4 justify-center'>

                <LeftPaneUserProfile profile={postOwner} />

                <PostsContainer />

                <RightPane />


            </div>
        </div>

    )
}

export default ProfileViewPage