import React from 'react';
import { BsSpotify } from "react-icons/bs";

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding'>
            <h1 className='text-3xl font-semibold text-left text-orange-50'>Login</h1>

            <form className='mx-20 mt-10 px-4 pt-4 pb-10 left-2 top-1 w-96 bg-gradient-to-bl from-slate-800 to-gray-600 rounded-md border border-black border-opacity-30 flex-col justify-center items-center gap-2 inline-flex'>
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
                <a href='' className='mx-10 w-80 mt-3.5 p-1.5 bg-emerald-500 rounded-[50px] justify-center items-center inline-flex gap-1'>
                    <BsSpotify color='black' size={20}/>
                    <span className="text-center text-orange-50 text-sm font-medium font-['Inter'] leading-tight">Login with Spotify</span>
                </a>
                <a href='' className='mx-10 w-80 mt-3.5 p-2 bg-orange-50 rounded-[50px] justify-center items-center inline-flex gap-1'>
                    <span className="text-center text-emerald-500 text-sm font-medium font-['Inter'] leading-tight">Login</span>
                </a>
               
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