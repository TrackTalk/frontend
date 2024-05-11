import React from 'react';
import useTrack from '../../store/useTrack';

const UserPicPane = (profile) => {
    const profileData = profile.profile?.user;
    const {setSelectedTrack} = useTrack();

    const handlePlayTrack = () => {
        if(profileData) {
            setSelectedTrack(profileData.track);
        }  
    }
    console.log("User pic pane", profileData)
    return (
        <div className='w-full mb-2'>
            <div className="rounded-t-md h-60 w-full overflow-hidden flex justify-center items-center">
                <img className="object-cover object-center h-full w-full" src={profileData?.coverPicUrl? `${profileData.coverPicUrl}` : "https://api.escuelajs.co/api/v1/files/ab110.jpeg"} alt="Mountain" />
            </div>
            <div className="ml-20 w-full relative -mt-20 flex flex-auto">
                <div className='avatar'>
                    <div className='w-40 rounded-full'>
                        <img className="" src={profileData? profileData.profilePicUrl : ""} alt='User Profile Pic' />
                    </div>

                </div>

                <div className='pl-3 flex flex-col justify-center text-orange-50 '>
                    <div className='flex flex-col justify-center '>
                        <p className='w-fit text-3xl font-bold p-1 bg-white/10 shadow-lg ring-1 ring-black/5 backdrop-blur-[2px] rounded-lg'>{profileData? `${profileData.firstName} ${profileData.lastName}` : null} </p>
                        {profileData?.currentlyListeningId? 
                        <p className="text-orange-50 text-sm font-light font-['Inter'] ">Currently Listening to <button onClick={handlePlayTrack} className='text-emerald-500 hover:underline'>{profileData?.track.name}</button> by {profileData?.track.artist}</p> 
                        : 
                        <p className="text-orange-400 text-base font-light font-['Inter'] ">{profileData?.userName}</p>
                        }
                        
                    </div>

                </div>
            </div>

        </div>
    )
}

export default UserPicPane