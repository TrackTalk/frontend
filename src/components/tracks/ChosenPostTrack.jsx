import React from 'react'
import useTrack from '../../store/useTrack'
import { FaHeadphonesSimple } from "react-icons/fa6";

const ChosenPostTrack = () => {

    const { selectedPostTrack, setSelectedTrack } = useTrack();
    const handlePlayTrack = () => {
        setSelectedTrack(selectedPostTrack);
    }

    return (
        <div className='w-96 min-h-20 px-3 py-1 bg-gradient-to-r from-teal-700 to-neutral-900 rounded-lg flex items-center justify-between'>
            {selectedPostTrack ? <div className='flex items-center'>

                <div className='w-16'>
                    <img src={selectedPostTrack.coverPicUrl} alt='artist_img' />
                </div>

                <div className='flex flex-col ml-2'>
                    <span className="max-w-36 text-orange-50 text-sm font-bold font-['Inter'] leading-snug truncate">{selectedPostTrack.name}</span>
                    <span className="opacity-65 text-orange-50 text-xs font-normal font-['Inter'] leading-normal">{selectedPostTrack.artist}</span>

                </div>
            </div> : <div className='flex flex-auto items-center justify-center'>
                <span className=" w-full text-orange-50 text-sm font-bold font-['Inter'] text-center ">Search and Choose Track to tag with the Post. </span>
            </div>
            }

            {selectedPostTrack ? <div className='inline-flex gap-3'>
                <button onClick={handlePlayTrack} className='ml-3 focus:outline-none'>
                    <FaHeadphonesSimple className='text-lg transition-all duration-300 transform hover:scale-110' />
                </button>

            </div> : null

            }


        </div>
    )
}

export default ChosenPostTrack