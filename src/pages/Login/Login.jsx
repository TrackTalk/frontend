import React from 'react';
import { BsSpotify } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className=' flex items-center justify-around flex-col'>
            <div className=' h-auto p-6 rounded-lg bg-gray-600 justify-start items-start gap-0'>
                <h1 className='text-3xl font-semibold text-left text-orange-50'>Login</h1>

                <form className='mx-20 mt-10 px-4 pt-4 pb-10 w-96 bg-gradient-to-bl from-slate-800 to-emerald-600 rounded-md border border-black border-opacity-30 flex-col justify-center items-center gap-2 inline-flex'>
                    <div className=''>
                        <label className='label '>
                            <span className='label-text text-lg text-orange-50'>Username</span>
                        </label>
                        <input type="text" placeholder=' Enter Username' className='w-80 input-bordered h-10 rounded-md textarea-md' />
                    </div>
                    <div className=''>
                        <label className='label '>
                            <span className='label-text text-lg text-orange-50'>Password</span>
                        </label>
                        <input type="text" placeholder=' Enter Password' className='w-80 input-bordered h-10 rounded-md textarea-md' />
                    </div>
                    <div className='w-full pl-4 pt-2 '>
                        <Link to='/register' className='text-orange-50 text-xs opacity-65 hover:underline hover:text-yellow-300'>
                            {"Don't"} have an account? Register here.
                        </Link>
                    </div>
                    <button to='' className='mx-10 w-80 mt-3 p-1.5 bg-emerald-500 rounded-btn justify-center items-center inline-flex gap-1 border border-black'>
                        <BsSpotify color='black' size={20} />
                        <span className="text-center text-orange-50 text-sm font-medium font-['Inter'] leading-tight">Login with Spotify</span>
                    </button>
                    <button to='' className='mx-10 w-80 mt-3.5 p-2 bg-orange-50 rounded-btn justify-center items-center inline-flex gap-1 border border-black'>
                        <span className="text-center text-emerald-500 text-sm font-medium font-['Inter'] leading-tight">Login</span>
                    </button>

                </form>

            </div>
            
        </div>

        //     <div className="w-[749px] h-[513px] px-5 py-[19px] bg-gray-600 rounded-[9px] border border-black flex-col justify-start items-center gap-[59px] inline-flex">
        //     <div className="w-[680px] h-[29px] text-orange-50 text-[32px] font-bold font-['Inter'] leading-[48px]">Login</div>
        //     <div className="px-[17px] pt-4 pb-[35px] bg-gradient-to-bl from-slate-800 to-gray-600 rounded-[9px] border border-black border-opacity-30 flex-col justify-start items-center gap-8 flex">
        //         <div className="h-[55px] relative">
        //             <div className="w-[251.18px] h-[31px] left-0 top-0 absolute text-orange-50 text-xl font-semibold font-['Inter'] leading-[30px]">Username</div>
        //             <div className="w-[409px] h-[22px] left-0 top-[33px] absolute bg-orange-50 rounded-[5px] border border-black border-opacity-50" />
        //         </div>
        //         <div className="h-[55px] relative">
        //             <div className="w-[251.18px] h-[31px] left-0 top-0 absolute text-orange-50 text-xl font-semibold font-['Inter'] leading-[30px]">Password</div>
        //             <div className="w-[409px] h-[22px] left-0 top-[33px] absolute bg-orange-50 rounded-[5px] border border-black border-opacity-50" />
        //         </div>
        //     </div>
        //     <div className="w-[451px] h-[38px] p-2.5 bg-emerald-500 rounded-[50px] border border-black justify-center items-center inline-flex">
        //         <img className="w-[25px] h-[25px]" src="https://via.placeholder.com/25x25" />
        //         <div className="w-[121px] h-[23px] text-center text-orange-50 text-[13px] font-semibold font-['Inter'] leading-tight">Login with Spotify</div>
        //     </div>
        //     <div className="w-[709px] h-[38px] p-2.5 bg-orange-50 rounded-[50px] border border-black justify-center items-center gap-2.5 inline-flex">
        //         <div className="w-[106px] h-[23px] text-center text-emerald-500 text-[13px] font-semibold font-['Inter'] leading-tight">Login</div>
        //     </div>
        // </div>
    )
}

export default Login