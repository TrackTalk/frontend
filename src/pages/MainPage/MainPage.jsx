import React from 'react'
import MessageContainer from '../../components/messages/MessageContainer'
import ConversationContainer from '../../components/conversations/ConversationContainer'
// import useRefreshToken from '../../hooks/auth/useRefreshToken'
// import useSpotifyWebPlayback from '../../hooks/spotify/useSpotifyWebPlayback'
import Player from '../../components/tracks/Player'
import PostsContainer from '../../components/posts/PostsContainer'
// import TestPlayer from '../../components/tracks/TestPlayer'
// import TestPlayer2 from '../../components/tracks/Player'

const MainPage = () => {

  // useSpotifyWebPlayback();
  return (
    <div className='w-full flex flex-auto gap-4 justify-center'>

      <div className=' w-80 '>
        <div className='sticky top-10'>
          <Player />
        </div>
        
      </div>

      <PostsContainer />
     

      <div className='flex flex-col items-center'>
        <ConversationContainer />
        <div className='divider p-3'></div>
        <MessageContainer />
      </div>


    </div>
  )
}

export default MainPage