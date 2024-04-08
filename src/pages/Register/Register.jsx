import React from 'react'
import { BsSpotify } from "react-icons/bs";

const Register = () => {
    return (
        <div className='items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg bg-gray-600 bg-clip-padding justify-start items-start gap-0 flex flex-col'>
                <h1 className='text-3xl font-semibold text-left text-orange-50 w-full'>Register</h1>
                <div className='inline-flex items-start'>
                    <div className="pt-5 flex-col justify-center items-center gap-6 inline-flex">
                        
                            <div className="p-2 relative">
                                <div className="w-[150px] h-[150px] bg-zinc-300 rounded-full" />
                            </div>
                            <a href='' className="w-52 p-2.5 bg-orange-50 rounded-[50px] border border-black justify-center items-center gap-2.5 inline-flex">
                                <div className="w-80 text-center text-zinc-800 text-[13px] font-medium font-['Inter'] leading-tight">Upload Profile Photo</div>
                            </a>
                            <a href='' className="w-52 p-2.5 bg-orange-50 rounded-[50px] border border-black justify-center items-center gap-2.5 inline-flex">
                                <div className="w-80 text-center text-red-800 text-[13px] font-medium font-['Inter'] leading-tight">Remove Profile Photo</div>
                            </a>
                        
                            <div className='p-4 rounded-md bg-slate-700 mt-10'>
                                <h2>
                                    Password Requirement
                                </h2>
                                <p className='text-sm'>Must have at least 8 words</p>
                                <p>test</p>
                                <p>test</p>

                            </div>
                        


                    </div>
                    <div className=''>
                        <form className='mx-2 ml-6 mt-5 px-4 pt-4 pb-10 w-96 bg-gradient-to-bl from-slate-800 to-emerald-600 rounded-md border border-black flex-col justify-center items-center gap-2 inline-flex'>
                            <div className='inline-flex gap-7'>
                                <div className='w-2/4'>
                                    <label className='label '>
                                        <span className='label-text text-lg text-orange-50'>First Name</span>
                                    </label>
                                    <input type="text" placeholder=' Enter First Name' className='w-36 input-bordered h-10 rounded-md textarea-md' />
                                </div>
                                <div className='w-2/4'>
                                    <label className='label '>
                                        <span className='label-text text-lg text-orange-50'>Last Name</span>
                                    </label>
                                    <input type="text" placeholder=' Enter Last Name' className='w-36 input-bordered h-10 rounded-md textarea-md' />
                                </div>

                            </div>
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
                            <div className=''>
                                <label className='label '>
                                    <span className='label-text text-lg text-orange-50'>Re-Enter Password</span>
                                </label>
                                <input type="text" placeholder=' Re-Enter Password' className='w-80 input-bordered h-10 rounded-md textarea-md' />
                            </div>

                            <div className='w-full pl-4 '>
                                <a href='' className='text-orange-50 text-xs opacity-65'>Registered Already? Login here</a>
                            </div>

                            <a href='' className='mx-10 w-80 p-1.5 bg-emerald-500 rounded-btn justify-center items-center inline-flex gap-1 border border-black'>
                                <BsSpotify color='black' size={20} />
                                <span className="text-center text-orange-50 text-sm font-medium font-['Inter'] leading-tight">Register with Spotify</span>
                            </a>
                            <a href='' className='mx-10 w-80 mt-3.5 p-2 bg-orange-50 rounded-btn justify-center items-center inline-flex gap-1 border border-black'>
                                <span className="text-center text-emerald-500 text-sm font-medium font-['Inter'] leading-tight">Register</span>
                            </a>

                        </form>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Register