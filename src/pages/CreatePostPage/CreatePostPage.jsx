import React from 'react'
import CreatePostForm from '../../components/posts/CreatePostForm'
import Player from '../../components/tracks/Player'
import ConversationContainer from '../../components/conversations/ConversationContainer'
import MessageContainer from '../../components/messages/MessageContainer'
import LeftPane from '../../components/pane/LeftPane'
import RightPane from '../../components/pane/RightPane'

const CreatePostPage = () => {
    return (
        <div className='w-full flex flex-auto gap-4 justify-center'>

            <LeftPane />

            <CreatePostForm />


            <RightPane />


        </div>
    )
}

export default CreatePostPage