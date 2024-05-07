import React from 'react'
import useTrack from '../../store/useTrack'
import Track from './Track';
import useGetTopTrack from '../../hooks/spotify/useGetTopTrack';
import SearchTrack from './SearchTrack';

const TracksContainer = () => {
    // const { trackList } = useTrack();

    const { loading } = useGetTopTrack();
    const {trackList} = useTrack();


    return (
        // <div className='flex justify-start items-start'>
        <div>
            <SearchTrack/>
            <div className='mx-2 my-1 px-1 max-h-[400px] bg-slate-700 rounded-lg flex flex-col items-center justify-between overflow-scroll overflow-x-hidden'>
                {trackList.map((track)=> {
                    return (
                        <Track 
                            key={track.spotifyId}
                            track={track}
                        />
                    )
                } )}
            </div>
        </div>

    )
}

export default TracksContainer