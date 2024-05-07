import React from 'react'
import ConversationContainer from '../conversations/ConversationContainer'
import MessageContainer from '../messages/MessageContainer'

const RightPane = () => {
  return (
    <div className='flex flex-col items-center'>
        <ConversationContainer />
        <div className='divider p-3'></div>
        <MessageContainer />
      </div>
  )
}

export default RightPane