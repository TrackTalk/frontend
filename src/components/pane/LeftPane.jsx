import React from 'react'
import Player from '../tracks/Player'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'

const LeftPane = () => {
    const navigate = useNavigate();
    const { authUser } = useAuthContext();
    const handleNavigate = () => {
        navigate('/create/post');
    }
    return (
        <div className=' w-80 flex flex-col '>
            <div className='card-title items-center p-4 mb-2 justify-between bg-gray-700 rounded-md'>
                <div className='flex flex-auto items-center'>
                    <div className='avatar'>
                        <div className='w-14 rounded-full'>
                            <img src={authUser.profilePicUrl} alt="chat bubble" />
                        </div>
                    </div>
                    <div className='pl-3 flex flex-col justify-center text-orange-100 opacity-85'>
                        <p>{authUser.firstName} {authUser.lastName} </p>
                        <span className="text-emerald-500 text-xs font-light font-['Inter']">{authUser.userName}</span>
                    </div>
                </div>


            </div>

            <div className='my-2'>
                <button onClick={handleNavigate} className="w-80 p-2.5 mb-2 bg-orange-50 rounded-[50px] border border-black justify-center items-center gap-2.5 inline-flex">
                    <div className="w-52 text-center text-emerald-500 text-[13px] font-semibold font-['Inter'] leading-tight">Create Post</div>
                </button>
            </div>
            <div className='sticky top-10'>
                <Player />
            </div>

        </div>
    )
}

export default LeftPane