import React, { useState } from 'react';
import { BsSpotify } from "react-icons/bs";
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin();

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("here")
        await login( userName, password );
        window.location.href = '/main';
    }

    const handleSpotifyLogin = async(e) => {
        e.preventDefault();
        window.location.href = `${BACKEND_URL}/auth/spotify`;
    }
    
    return (
        <div className=' flex items-center justify-center flex-col'>
            <div className=' h-auto p-6 rounded-lg bg-gray-600 justify-start items-start gap-0'>
                <h1 className='text-3xl font-semibold text-left text-orange-50'>Login</h1>

                <form onSubmit={handleSubmit} className='mx-20 mt-5 px-4 pt-4 pb-10 w-96 bg-gradient-to-bl from-slate-800 to-emerald-600 rounded-md border border-black border-opacity-30 flex-col justify-center items-center gap-2 inline-flex'>
                    <div className=''>
                        <label className='label '>
                            <span className='label-text text-lg text-orange-50'>Username</span>
                        </label>
                        <input type="text" placeholder=' Enter Username' className='w-80 input-bordered h-10 rounded-md textarea-md' 
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className=''>
                        <label className='label '>
                            <span className='label-text text-lg text-orange-50'>Password</span>
                        </label>
                        <input type="password" placeholder=' Enter Password' className='w-80 input-bordered h-10 rounded-md textarea-md' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <div className='w-full pl-4 pt-2 '>
                        <Link to='/register' className='text-orange-50 text-xs opacity-65 hover:underline hover:text-yellow-300'>
                            {"Don't"} have an account? Register here.
                        </Link>
                    </div>
                    <button onClick={handleSpotifyLogin} className='mx-10 w-80 mt-3 p-1.5 bg-emerald-500 rounded-btn justify-center items-center inline-flex gap-1 border border-black'>
                        <BsSpotify color='black' size={20} />
                        <span className="text-center text-orange-50 text-sm font-medium font-['Inter'] leading-tight">Login with Spotify</span>
                    </button>
                    <button type='submit' className='mx-10 w-80 mt-3.5 p-2 bg-orange-50 rounded-btn justify-center items-center inline-flex gap-1 border border-black'>
                        {loading ? <span className='loading loading-spinner '></span> : <span className="text-center text-emerald-500 text-sm font-medium font-['Inter'] leading-tight">Login</span>}
                    </button>

                </form>

            </div>
            
        </div>

    )
}

export default Login