import React, { useState } from 'react'
import { FaHeadphonesSimple } from 'react-icons/fa6';
import useTrack from '../../store/useTrack';
import { IoCheckmarkCircle, IoCheckmarkCircleOutline } from 'react-icons/io5';

const Track = (track) => {
    const trackData = track.track;
    const { setSelectedTrack, setSelectedPostTrack, selectedPostTrack } = useTrack();
    // const [chosen, setChosen] = useState(false);
    const chosen = selectedPostTrack ? (trackData.spotifyId === selectedPostTrack.spotifyId) : false;

    const handlePlayTrack = (e) => {
        e.preventDefault();
        setSelectedTrack(trackData);
    }

    const handleChooseTrack = () => {
        if (chosen)
            setSelectedPostTrack(null);
        else
            setSelectedPostTrack(trackData);

        // if(!chosen)
        // setChosen(true)
    }

    return (
        <div className='w-[23rem] flex gap-2 items-center rounded px-3 py-3'>
            <div className=''>
                <div className='w-14'>
                    <img src={trackData.coverPicUrl} alt="" />
                </div>
            </div>
            <div className='w-full flex flex-col flex-1'>
                <span className="max-w-48 text-orange-50 text-sm font-bold font-['Inter'] leading-snug truncate">{trackData.name}</span>
                <span className='text-sm opacity-70'>{trackData.artist}</span>
            </div>
            <div className='inline-flex gap-3'>
                <button onClick={handlePlayTrack} className='ml-3 focus:outline-none'>
                    <FaHeadphonesSimple className='text-lg transition-all duration-300 transform hover:scale-110' />
                </button>
                <button onClick={handleChooseTrack} className='ml-3 focus:outline-none'>
                    {chosen ? <IoCheckmarkCircle className='text-emerald-500 text-lg transition-all duration-300 transform hover:scale-110' /> : <IoCheckmarkCircleOutline className='text-lg transition-all duration-300 transform hover:scale-110' />}
                </button>


            </div>
        </div>
    )
}

export default Track