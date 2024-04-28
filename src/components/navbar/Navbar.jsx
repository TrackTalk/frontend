import React from 'react'
import logo from "../../assets/TrackTalk_logo_icons.png"
import { useAuthContext } from '../../context/AuthContext'
import useLogout from '../../hooks/auth/useLogout'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const { authUser } = useAuthContext();
    const { logout } = useLogout();
    const navigate = useNavigate();
    const handleLogout = async () => {
        await logout();
    }
    
    
    return (
        <div className='navbar mb-3 bg-base-100'>
            <div className='flex-1 pl-5'>
                <div className='flex flex-auto items-center transition-transform transform hover:scale-105'>
                    <button onClick={() => {if(authUser) navigate("/main"); else navigate("/")}} className='w-14 py-1'>
                        <img src={logo} className=''></img>
                    </button>
                    <button onClick={() => {if(authUser) navigate("/main"); else navigate("/")}} className='w-14 py-1'>
                        <span className="text-emerald-500 text-3xl font-bold font-['League Gothic'] leading-[54px] tracking-[3.60px]">Track</span><span className="text-yellow-600 text-3xl font-bold font-['League Gothic'] leading-[54px] tracking-[3.60px]">Talk</span>
                    </button>
                    
                </div>
            </div>
            <div className='flex-none'>
                {authUser ? (
                    <div>
                        <ul className='menu menu-horizontal flex items-center px-1 gap-4'>
                            <li>
                                <div className='flex flex-auto items-center'>
                                    <div className='chat-image avatar'>
                                        <div className='w-10 rounded-full'>
                                            <img src={authUser.profilePicUrl} alt="chat bubble" />
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <span className='flex justify-start items-center label-text text-lg text-orange-100 font-bold text-center hover:underline'>My Profile</span>
                                    </div>
                                </div>
                            </li> 
                            <li>
                                <button onClick={handleLogout} className="btn btn-error w-20 h-10 px-5 py-3 bg-red-500 rounded-md justify-center items-center gap-2 inline-flex">
                                    <div className="text-orange-50 text-sm font-bold font-['Inter'] leading-normal">Logout</div>
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div>
                        <ul className='menu menu-horizontal px-1 gap-4'>

                            <li>
                                <button onClick={() => navigate("/login")} className="w-20 h-10 px-5 py-3 bg-orange-50 rounded-md justify-center items-center gap-2 inline-flex">
                                    <div className="text-emerald-500 text-sm font-bold font-['Inter'] leading-normal">Login</div>
                                </button>
                            </li>

                            <li>
                                <button onClick={() => navigate("/register")} className="w-20 h-10 px-5 py-3 bg-emerald-500 rounded-md justify-center items-center gap-2 inline-flex">
                                    <div className="text-orange-50 text-sm font-bold font-['Inter'] leading-normal">Register</div>
                                </button>
                            </li>
                        </ul>
                    </div>)
                }


            </div>

        </div>
    )
}

export default Navbar