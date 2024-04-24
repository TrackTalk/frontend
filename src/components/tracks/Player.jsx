import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useAuthContext } from "../../context/AuthContext";


const Player = () => {
    const [play, setPlay] = useState(false);
    const trackUri = "spotify:track:24jvD83UgLmrdGjhWTFslY"
    useEffect(() => setPlay(true), [trackUri])
    const { authUser } = useAuthContext();


    return (
        <div className=''>
            <div>
                
            </div>
            <SpotifyPlayer
                token={authUser.accessToken}
                showSaveIcon
                callback={state => {
                    if (!state.isPlaying) setPlay(false)
                }}
                play={play}
                uris={trackUri ? [trackUri] : []}
                styles={{
                    bgColor: '#4B6376',
                    color: '#F8F2E8',
                    trackArtistColor: '#F8F2E8',
                    trackNameColor: '#F8F2E8',
                    sliderColor: '#32B083'
                }}
            />
        </div>
    )
}

export default Player