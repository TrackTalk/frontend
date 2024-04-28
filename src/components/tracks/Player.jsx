import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useAuthContext } from "../../context/AuthContext";
import useTrack from "../../store/useTrack";


const Player = () => {
    const [play, setPlay] = useState(false);
    const { selectedTrack, setSelectedTrack } = useTrack();
    const trackUri = "spotify:track:24jvD83UgLmrdGjhWTFslY"

    useEffect(() => {
        setPlay(false);
        setSelectedTrack(trackUri);
        console.log(play);
    }, [trackUri])
    const { authUser } = useAuthContext();


    return (

        <div className='p-2 flex flex-col items-center justify-center bg-[#4B6376] rounded-lg fixed top-30'>
            {/* try implementing blank track state */}

            {selectedTrack ? (<div>
                <div className='w-[300px]'>
                    <SpotifyPlayer
                        name="Track Talk"
                        persistDeviceSelection={true}
                        layout="horizontal-cover"
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