import React from 'react'
import MessageContainer from '../../components/messages/MessageContainer'
import ConversationContainer from '../../components/conversations/ConversationContainer'
// import useRefreshToken from '../../hooks/auth/useRefreshToken'
// import useSpotifyWebPlayback from '../../hooks/spotify/useSpotifyWebPlayback'
import Player from '../../components/tracks/Player'
import PostsContainer from '../../components/posts/PostsContainer'
// import TestPlayer from '../../components/tracks/TestPlayer'
// import TestPlayer2 from '../../components/tracks/Player'
import LeftPane from '../../components/pane/LeftPane'
import RightPane from '../../components/pane/RightPane'

const MainPage = () => {

  // useSpotifyWebPlayback();
  return (
    <div className='w-full flex flex-auto gap-4 justify-center'>

      <LeftPane />

      <PostsContainer />
     

      <RightPane />


    </div>
  )
}

export default MainPage