import React, { useEffect, useState } from 'react'
import Player from '../tracks/Player';
import { useAuthContext } from '../../context/AuthContext'
import useFollowUser from '../../hooks/user/useFollowUser';
import useCreateConversation from '../../hooks/conversation/useCreateConversation';
import useFindConversation from '../../hooks/conversation/useFindConversation';
import { useNavigate } from 'react-router-dom';

const LeftPaneUserProfile = (profile) => {
    const { authUser } = useAuthContext();
    const { followUser, unfollowUser } = useFollowUser();
    const navigate = useNavigate()
    const profileData = profile.profile?.user;


    // const followCount = profile.profile.follow.count;
    const [followCount, setFollowCount] = useState(0);
    const [followed, setFollowed] = useState(false);
    const [showCardTitle, setShowCardTitle] = useState(false);
    const { createConversation } = useCreateConversation();
    const { findConversation } = useFindConversation();
    // const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        setFollowCount(profile.profile?.follow.count)
    }, [profile.profile]);

    useEffect(() => {
        const checkIfFollowed = () => {
            // console.log("followList", profile.profile?.follow)
            const followList = profile.profile?.follow?.rows;
            if (followList) {
                const isFollowed = followList.some(user => user.userId === authUser.userId);
                setFollowed(isFollowed);
                console.log(followed);
            }
        }
        checkIfFollowed();
    }, [profile.profile])

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 400;
            const isScrolled = window.scrollY > scrollThreshold;
            setShowCardTitle(isScrolled);

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleEditPage = () => {
        navigate("/edit/user");
    }

    const handleCreatePostPage = () => {
        navigate("/create/post");
    }

    const handleFollowClick = async () => {
        if (followed) {
            await unfollowUser(profileData.userId);
            setFollowed(false);
            setFollowCount(followCount - 1);
        } else {
            await followUser(profileData.userId);
            setFollowed(true);
            setFollowCount(followCount + 1);
        }
    };

    const handleConversation = async () => {
        const found = await findConversation(profileData.userId);
        if (found) return;
        else createConversation(profileData);
    }

    return (
        <div className=' w-80 flex flex-col'>

            <div className={` h-72 items-center p-4 mb-2 justify-center bg-white/10 shadow-lg ring-1 ring-black/5 backdrop-blur-3xl rounded-md sticky top-1 transition-opacity duration-500 ${showCardTitle ? 'opacity-100' : 'opacity-0'}`}>
                <div className='flex flex-col items-center'>
                    <div className='avatar'>
                        <div className='w-44 rounded-full'>
                            <img src={profileData ? `${profileData.profilePicUrl}` : null} alt="chat bubble" />
                        </div>
                    </div>
                    <div className='mt-2 pl-3 flex flex-col items-center justify-center text-orange-100 opacity-85'>
                        <div className='card-title'>{profileData ? <div>{profileData.firstName} {profileData.lastName}</div> : null}</div>
                        <span className="text-orange-400 text-xs font-light font-['Inter']">{profileData ? <div>{profileData.userName}</div> : null}</span>
                        <p className='text-sm mt-2'><span className='text-emerald-500'>{followCount ? `${followCount}` : 0}</span> Followers</p>
                    </div>
                </div>
            </div>
            <div className={`my-2 sticky top-[19.5rem] transition-transform duration-500 ${showCardTitle ? 'translate-y-0' : '-translate-y-72'}`}>
                {authUser.userId === profileData?.userId ?
                    <button onClick={handleEditPage} className={`w-[48%] p-2.5 mb-2 bg-orange-400 rounded-[50px] border border-black justify-center items-center gap-2.5 inline-flex transition-colors duration-300`}>
                        <div className={`w-52 text-center text-orange-50 text-[13px] font-semibold font-['Inter'] leading-tight transition-opacity duration-200`}>Edit Profile</div>
                    </button> :
                    <button onClick={handleFollowClick} className={`w-[48%] p-2.5 mb-2 ${followed ? 'bg-red-600' : 'bg-emerald-500'}  rounded-[50px] border border-black justify-center items-center gap-2.5 inline-flex transition-colors duration-300`}>
                        <div className={`w-52 text-center text-orange-50 text-[13px] font-semibold font-['Inter'] leading-tight transition-opacity duration-200`}>{followed ? "Unfollow" : "Follow"}</div>
                    </button>
                }
                {authUser.userId === profileData?.userId ?
                    <button onClick={handleCreatePostPage} className={`w-[48%] ml-3 p-2.5 mb-2 bg-emerald-500 rounded-[50px] border border-black justify-center items-center gap-2.5 inline-flex transition-colors duration-300`}>
                        <div className={`w-52 text-center text-orange-50 text-[13px] font-semibold font-['Inter'] leading-tight transition-opacity duration-200`}>Create Post</div>
                    </button> :
                    <button onClick={handleConversation} className="w-[48%] ml-3 p-2.5 mb-2 bg-orange-400 rounded-[50px] border border-black justify-center items-center gap-2.5 inline-flex">
                        <div className="w-52 text-center text-[13px] font-semibold font-['Inter'] leading-tight text-orange-50">Send Message</div>
                    </button>
                }


            </div>
            <div className={`sticky top-[23rem] transition-transform duration-500 ${showCardTitle ? 'translate-y-0' : '-translate-y-72'}`}>
                <Player />
            </div>

        </div>
    )
}

export default LeftPaneUserProfile