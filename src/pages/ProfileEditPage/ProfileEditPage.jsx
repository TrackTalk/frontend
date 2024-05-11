import React, { useEffect, useRef, useState } from 'react'
import { BsSpotify } from "react-icons/bs";
import toast from 'react-hot-toast';
import useEditProfile from '../../hooks/user/useEditProfile';
import { useAuthContext } from '../../context/AuthContext';

const ProfileEditPage = () => {
    const BACKEND_URL = `${import.meta.env.VITE_BACKEND_URL}/api`;
    const { loading, editProfile } = useEditProfile();
    const { authUser } = useAuthContext();
    const imgBBKey = import.meta.env.VITE_IMGBB_API_KEY;
    // console.log(process.env.BACKEND_URL);

    const [imagePreview, setImagePreview] = useState('');
    const [coverPicPreview, setCoverPicPreview] = useState('');

    const imageRef = useRef();
    const coverPicRef = useRef();
    const [inputs, setInputs] = useState({
        userId: '',
        userName: '',
        firstName: '',
        lastName: '',
        password: '',
        profilePicUrl: '',
        coverPicUrl: '',
        email: '',
        confirmPassword: ''
    })

    useEffect(() => {
        setInputs({
            userId: authUser.userId,
            userName: authUser.userName,
            firstName: authUser.firstName,
            lastName: authUser.lastName,
            profilePicUrl: authUser.profilePicUrl,
            coverPicUrl: authUser.coverPicUrl ? authUser.coverPicUrl : '',
            email: authUser.email,
        })
        setImagePreview(authUser.profilePicUrl);
        setCoverPicPreview(authUser.coverPicUrl ? authUser.coverPicUrl : '')

    }, [authUser])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await editProfile(inputs);
        console.log(res);
        window.location.href = '/main';

    }

    const handleSpotifyRegister = async (e) => {
        e.preventDefault();
        window.location.href = `${BACKEND_URL}/auth/spotify`;
        // await axios.get(`${BACKEND_URL}/auth/spotify`);
    }

    const handleImageUpload = async (e) => {
        e.preventDefault();
        imageRef.current.click();
    }

    const handleCoverPicUpload = async (e) => {
        e.preventDefault();
        coverPicRef.current.click()
    }

    const handleCoverPicDisplay = async () => {
        try {
            const imageFile = coverPicRef.current.files[0];
            const formData = new FormData();
            formData.append("image", imageFile);

            const response = await fetch(`https://api.imgbb.com/1/upload?key=` + imgBBKey, {
                method: 'POST',
                body: formData
            });

            if (response.status === 200) {
                const data = await response.json();
                console.log(data);

                setCoverPicPreview(data?.data.image.url)
                setInputs({ ...inputs, coverPicUrl: data?.data.image.url });
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    console.log(authUser);

    const handleImageDisplay = async () => {
        try {
            const imageFile = imageRef.current.files[0];
            const formData = new FormData();
            formData.append("image", imageFile);

            const response = await fetch(`https://api.imgbb.com/1/upload?key=` + imgBBKey, {
                method: 'POST',
                body: formData
            });

            if (response.status === 200) {
                const data = await response.json();
                console.log(data);
                setImagePreview(data?.data.image.url)
                setInputs({ ...inputs, profilePicUrl: data?.data.image.url });
            }
        } catch (error) {
            toast.error(error.message);
        }

    }

    const handleCoverPicRemove = async (e) => {
        e.preventDefault();
        setCoverPicPreview('');
        setInputs({ ...inputs, coverPicUrl: "" });
    }

    const handleImageRemove = async (e) => {
        e.preventDefault();
        setImagePreview('');
        setInputs({ ...inputs, profilePicUrl: '' });
    }

    return (
        <div className='w-auto'>
            <div className='w-full mb-2'>
                <div className="rounded-t-md h-60 w-full overflow-hidden flex justify-center items-center">
                    <img className="object-cover object-center h-full w-full" src={coverPicPreview} alt="Mountain" />
                </div>
                <form className="ml-4 w-full relative -mt-10 flex flex-auto mb-2">
                    <input type='file' id='file' ref={coverPicRef} onChange={handleCoverPicDisplay} hidden></input>
                    <div className=''>
                        <button type='submit' onClick={handleCoverPicUpload} className="w-40 p-2.5 bg-orange-50 rounded-[50px] border border-black justify-center items-center gap-2.5 inline-flex">
                            <div className="w-80 text-center text-emerald-500 text-[13px] font-medium font-['Inter'] leading-tight">{authUser.coverPicUrl ? "Change Cover Photo" : "Upload Cover Photo"}</div>
                        </button>
                        <button onClick={handleCoverPicRemove} className="w-40 p-2.5 bg-orange-50 rounded-[50px] border border-black justify-center items-center gap-2.5 inline-flex">
                            <div className="w-80 text-center text-red-800 text-[13px] font-medium font-['Inter'] leading-tight">Remove Cover Photo</div>
                        </button>

                    </div>

                    {/* <div className='pl-3 flex flex-col justify-center text-orange-50 '>
                        <div className='flex flex-col justify-center '>
                            <p className='w-fit text-3xl font-bold p-1 bg-white/10 shadow-lg ring-1 ring-black/5 backdrop-blur-[2px] rounded-lg'>{profileData ? `${profileData.firstName} ${profileData.lastName}` : null} </p>
                            {profileData?.currentlyListeningId ?
                                <p className="text-orange-50 text-sm font-light font-['Inter'] ">Currently Listening to <button onClick={handlePlayTrack} className='text-emerald-500 hover:underline'>{profileData?.track.name}</button> by {profileData?.track.artist}</p>
                                :
                                <p className="text-orange-400 text-base font-light font-['Inter'] ">{profileData?.userName}</p>
                            }

                        </div>

                    </div> */}
                </form>

            </div>
            <div className=' min-h-full p-6 rounded-lg bg-gray-600 justify-start items-start gap-0'>
                <h1 className='text-3xl font-semibold text-left text-orange-50 w-full'>Update Profile</h1>
                <div className='inline-flex items-start'>
                    <div className="pt-5 flex-col justify-center items-center gap-6 inline-flex">

                        <div className="preview-image p-2 relative">
                            {imagePreview ? (
                                <img src={imagePreview} alt='Preview' className='w-[150px] h-[150px] bg-zinc-300 rounded-full' />
                            ) : (
                                <div className='w-[150px] h-[150px] bg-zinc-300 rounded-full' />
                            )}
                        </div>
                        <form className='pt-5 flex-col justify-center items-center gap-6 inline-flex' >
                            <input type='file' id='file' ref={imageRef} onChange={handleImageDisplay} hidden></input>
                            <button type='submit' onClick={handleImageUpload} className="w-52 p-2.5 bg-orange-50 rounded-[50px] border border-black justify-center items-center gap-2.5 inline-flex">
                                <div className="w-80 text-center text-zinc-800 text-[13px] font-medium font-['Inter'] leading-tight">Upload Profile Photo</div>
                            </button>
                            <button onClick={handleImageRemove} className="w-52 p-2.5 bg-orange-50 rounded-[50px] border border-black justify-center items-center gap-2.5 inline-flex">
                                <div className="w-80 text-center text-red-800 text-[13px] font-medium font-['Inter'] leading-tight">Remove Profile Photo</div>
                            </button>
                        </form>



                        <div className='p-4 rounded-md bg-slate-700 mt-10'>
                            <h2>
                                Password Requirement
                            </h2>
                            <p className='text-sm'>Must have at least 8 words</p>
                            <p className='text-sm'>Have have at least one alphabet</p>
                            <p className='text-sm'>Must have at least one number</p>

                        </div>

                    </div>
                    <div className=''>
                        <form onSubmit={handleSubmit} className='mx-2 ml-6 mt-5 px-4 pt-4 pb-10 w-96 bg-gradient-to-bl from-slate-800 to-emerald-600 rounded-md border border-black flex-col justify-center items-center gap-2 inline-flex'>
                            <div className='inline-flex gap-7'>
                                <div className='w-2/4'>
                                    <label className='label '>
                                        <span className='label-text text-lg text-orange-50'>First Name</span>
                                    </label>
                                    <input type="text" placeholder=' Enter First Name' className='w-36 input-bordered h-10 rounded-md textarea-md'
                                        value={inputs.firstName}
                                        onChange={(e) => setInputs({ ...inputs, firstName: e.target.value })}
                                    />
                                </div>
                                <div className='w-2/4'>
                                    <label className='label '>
                                        <span className='label-text text-lg text-orange-50'>Last Name</span>
                                    </label>
                                    <input type="text" placeholder=' Enter Last Name' className='w-36 input-bordered h-10 rounded-md textarea-md'
                                        value={inputs.lastName}
                                        onChange={(e) => setInputs({ ...inputs, lastName: e.target.value })}
                                    />
                                </div>

                            </div>
                            <div className=''>
                                <label className='label '>
                                    <span className='label-text text-lg text-orange-50'>Username</span>
                                </label>
                                <input type="text" placeholder=' Enter Username' className='w-80 input-bordered h-10 rounded-md textarea-md'
                                    value={inputs.userName}
                                    onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
                                />
                            </div>
                            <div className=''>
                                <label className='label '>
                                    <span className='label-text text-lg text-orange-50'>Email</span>
                                </label>
                                <input type="text" placeholder=' Enter Email' className='w-80 input-bordered h-10 rounded-md textarea-md'
                                    value={inputs.email}
                                    onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                                />
                            </div>
                            <div className=''>
                                <label className='label '>
                                    <span className='label-text text-lg text-orange-50'>Password</span>
                                    <span className='label-text text-sm text-orange-50/50'>
                                        {authUser.spotifyLogin? "Not required" : "Required"}
                                    </span>
                                </label>
                                <input type="password" placeholder=' Enter Password' className='w-80 input-bordered h-10 rounded-md textarea-md'
                                    value={inputs.password}
                                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                                />
                            </div>
                            <div className=''>
                                <label className='label '>
                                    <span className='label-text text-lg text-orange-50'>Re-Enter Password</span>
                                    <span className='label-text text-sm text-orange-50/50'>
                                        {authUser.spotifyLogin? "Not required" : "Required"}
                                    </span>
                                </label>
                                <input type="password" placeholder=' Re-Enter Password' className='w-80 input-bordered h-10 rounded-md textarea-md'
                                    value={inputs.confirmPassword ? inputs.confirmPassword : ""}
                                    onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                                />
                            </div>

                            {/* <div className='w-full pl-4 '>
                                <Link to='/login' className='text-orange-50 text-xs opacity-65 hover:underline hover:text-yellow-300'>Registered Already? Login here</Link>
                            </div> */}

                            {
                                authUser.spotifyLogin ? <div className='mx-10 w-80 p-1.5 bg-emerald-500 rounded-md justify-center items-center inline-flex gap-1'><span className='text-orange-50 inline-flex'>Already Connected to &nbsp; <BsSpotify color='black' size={20} /> &nbsp; Spotify</span></div> : 
                                <button onClick={handleSpotifyRegister} className='mx-10 w-80 p-1.5 bg-emerald-500 rounded-btn justify-center items-center inline-flex gap-1 border border-black'>
                                    <BsSpotify color='black' size={20} />
                                    <span className="text-center text-orange-50 text-sm font-medium font-['Inter'] leading-tight">Register with Spotify</span>
                                </button>
                            }

                            {/* <button onClick="" className='mx-10 w-80 p-1.5 bg-emerald-500 rounded-btn justify-center items-center inline-flex gap-1 border border-black'>
                                <BsSpotify color='black' size={20} />
                                <span className="text-center text-orange-50 text-sm font-medium font-['Inter'] leading-tight">Register with Spotify</span>
                            </button> */}
                            <button type='submit' disabled={loading} className='mx-10 w-80 mt-3 p-2 bg-orange-50 rounded-btn justify-center items-center inline-flex gap-1 border border-black'>
                                {loading ? <span className='loading loading-spinner'></span> : <span className="text-center text-emerald-500 text-sm font-medium font-['Inter'] leading-tight">Update</span>}
                                {/* <span className="text-center text-emerald-500 text-sm font-medium font-['Inter'] leading-tight">Register</span> */}
                            </button>

                        </form>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default ProfileEditPage