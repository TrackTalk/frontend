import React from 'react'
import MessageContainer from '../../components/messages/MessageContainer'
import ConversationContainer from '../../components/conversations/ConversationContainer'

const MainPage = () => {
  return (
    <div>MainPage
      <ConversationContainer />
      <div className='divider p-3'></div>
      <MessageContainer/>
    </div>
  )
}

export default MainPage