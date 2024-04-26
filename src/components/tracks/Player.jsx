import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useAuthContext } from "../../context/AuthContext";
import useTrack from "../../store/useTrack";


const Player = () => {
    const [play, setPlay] = useState(false);
    const { selectedTrack, setSelectedTrack } = useTrack();
    const trackUri = "spotify:track:24jvD83UgLmrdGjhWTFslY"

    useEffect(() => {
        setPlay(true);
        setSelectedTrack(trackUri);
        console.log(play);
    }, [trackUri])
    const { authUser } = useAuthContext();


    return (

        <div className='pb-10'>
            {/* try implementing blank track state */}

            {selectedTrack ? (<div>
                <div className='w-[450px]'>
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
                            sliderColor: '#32B083',
                            height: 100,

                        }}
                    />

                </div>
            </div>
            ) : (
                <div className='w-[450px] h-24 p-5 flex justify-center items-center bg-gray-600 rounded-lg'>
                    <p className='text-xl font-semibold text-orange-50'>Please select a track to play.</p>
                </div>
            )}



        </div>
    )
}

export default Player