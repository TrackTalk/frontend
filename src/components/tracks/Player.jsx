import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useAuthContext } from "../../context/AuthContext";
import useTrack from "../../store/useTrack";


const Player = () => {
    const [play, setPlay] = useState(false);
    const { selectedTrack } = useTrack();
    let trackUri = "";

    console.log(selectedTrack);

    if(selectedTrack) {
        trackUri = `spotify:track:${selectedTrack.spotifyId}`
    }
    

    useEffect(() => {
        setPlay(false);
    }, [selectedTrack])
    const { authUser } = useAuthContext();


    return (

        <div className='p-2 flex flex-col items-center justify-center bg-[#4B6376] rounded-lg'>
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
                        play={true}
                        uris={selectedTrack ? [trackUri] : []}
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
                <div className='w-full min-w-[300px] h-24 p-5 flex justify-center items-center bg-[#4B6376] rounded-lg'>
                    <p className='text-xl font-semibold text-orange-50'>Please select a track to play.</p>
                </div>
            )}



        </div>
    )
}

export default Player