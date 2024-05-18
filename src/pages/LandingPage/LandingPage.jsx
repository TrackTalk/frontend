import React from 'react'
import useGetAllTracks from '../../hooks/tracks/useGetAllTracks'
import useGetPostCount from '../../hooks/posts/useGetPostCount';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BsSpotify } from "react-icons/bs";
// import '../../../node_modules/react-multi-carousel/lib/styles.css'

const LandingPage = () => {
    const { tracks, trackCount } = useGetAllTracks();
    const { postCount } = useGetPostCount();
    const navigate = useNavigate();
    const BACKEND_URL = `${import.meta.env.VITE_BACKEND_URL}/api`;
    const responsive = {
        desktop: {
            breakpoint: { max: 5000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,

        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,

        },
    };

    const handleLogin = () => {
        navigate('/login');
    }

    const handleRegister = () => {
        navigate('/register');
    }

    const handleSpotifyLogin = () => {
        window.location.href = `${BACKEND_URL}/auth/spotify`;
    }
 
    console.log(postCount);
    return (
        <div className='w-[860px] flex flex-col border border-black px-5 justify-center items-center'>

            <div className='w-[99%] justify-center items-center flex flex-auto gap-6'>
                <div>
                    <h1 className="text-orange-50 text-3xl font-bold font-['Inter'] leading-[72px]">
                        TrackTalk
                    </h1>

                    <p className=" w-96 text-orange-50 text-sm font-normal font-['Inter'] leading-normal">
                        Welcome to TrackTalk Community! Discover new
                        <span className="text-emerald-500"> tracks</span>
                        , engage in lively
                        <span className="text-yellow-600 "> discussions</span>
                        , and connect with fellow music enthusiasts on our platform. With seamless integration with popular
                        <span className="text-emerald-500"> music streaming services </span>
                        and
                        <span className="text-yellow-600 "> real-time chat functionality</span>
                        , immerse yourself in a vibrant community dedicated to all things music.
                    </p>
                </div>

                <div className='w-64 mx-5 p-5'>
                    <img src="https://i.ibb.co/56B3vyv/WF-Image-Placeholder.png" alt="" />
                </div>


            </div>
            <div className='w-[90%] my-5 flex flex-col items-center justify-center bg-slate-600 rounded-md'>
                <div className='w-full mt-3'>
                    <h1 className="text-orange-50 text-center text-lg font-bold font-['Inter'] leading-[72px]">
                        Explore What people are talking about these <span className='text-emerald-500'>Tracks</span>.
                    </h1>

                </div>
                <div>
                    <Carousel
                        showDots={false}
                        responsive={responsive}
                        ssr={false}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        keyBoardControl={true}
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["desktop"]}
                        // removeArrowOnDeviceType={["tablet", "mobile"]}
                        // deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        className='border border-black max-w-[32rem] pr-3 bg-gradient-to-bl from-emerald-500 to-slate-600 rounded-md'
                    >
                        {tracks ? tracks.map(track => (

                            <div key={track.trackId}>
                                {console.log(track)}
                                <div className='w-28 m-7 border border-black'>

                                    <img src={track.coverPicUrl} alt={track.name} className='' />
                                </div>

                            </div>
                        )) : null}
                    </Carousel>

                </div>

                <div className='w-fit m-5 flex gap-10'>
                    <div className='justify-center items-center gap-2.5 inline-flex'>

                        <div>
                            <span className="text-yellow-600 text-3xl font-bold font-['Inter']">{postCount? postCount : null}</span><span className="text-orange-50 text-2xl font-bold font-['Inter']"> Discussions,<br />
                            </span>
                            <span className="text-emerald-500 text-3xl font-bold font-['Inter']">{trackCount? trackCount : null}</span><span className="text-orange-50 text-2xl font-bold font-['Inter']"> Tracks are in<br />Discussions</span>
                        </div>
                    </div>
                    <div className='w-fit flex flex-col gap-2 px-3 py-5 border border-black bg-slate-700 '>
                        <h1 className='text-orange-50 font-bold px-3 text-sm'>Join the Community, Discuss your taste on <span className='text-emerald-500'> Music</span>.</h1>
                        <div className='flex flex-auto items-center justify-center gap-2'>
                            <button onClick={handleRegister} className='p-2 w-28 rounded-btn btn hover:bg-emerald-800 bg-emerald-500'> <span className='text-center text-orange-50 '>Register</span> </button>
                            <button onClick={handleSpotifyLogin} className='p-2 w-36 rounded-btn btn hover:bg-emerald-800 bg-emerald-500 flex flex-auto'> <BsSpotify color='black' size={20} /><span className='text-center text-orange-50'>Register with Spotify</span> </button>
                        </div>
                        <div className='flex flex-auto gap-7 justify-center items-center'>
                            <p className='text-xs text-orange-50/50'>Already Registered? <br />Welcome back to the Community</p>
                            <button onClick={handleLogin} className='p-2 w-36 rounded-btn btn hover:bg-emerald-100 bg-orange-50'> <span className='text-center text-emerald-500 '>Login</span> </button>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    )
}

export default LandingPage