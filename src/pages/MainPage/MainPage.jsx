import React from 'react'
import MessageContainer from '../../components/messages/MessageContainer'
import ConversationContainer from '../../components/conversations/ConversationContainer'
import useRefreshToken from '../../hooks/useRefreshToken'
import useSpotifyWebPlayback from '../../hooks/useSpotifyWebPlayback'
import Player from '../../components/tracks/Player'
// import TestPlayer from '../../components/tracks/TestPlayer'
// import TestPlayer2 from '../../components/tracks/Player'

const MainPage = () => {
  useRefreshToken();
  // useSpotifyWebPlayback();
  return (
    <div>MainPage
      <Player />
      <ConversationContainer />
      <div className='divider p-3'></div>
      <MessageContainer/>
    </div>
  )
}

export default MainPage