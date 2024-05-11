import React, { useRef, useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import TracksContainer from '../tracks/TracksContainer';
import ChosenPostTrack from '../tracks/ChosenPostTrack';
import useCreatePost from '../../hooks/posts/useCreatePost';
import useTrack from '../../store/useTrack';
import toast from 'react-hot-toast';
// import usePost from '../../store/usePost';
import { useNavigate } from 'react-router-dom';


const CreatePostForm = () => {
    const { authUser } = useAuthContext();
    const [imagePreview, setImagePreview] = useState('');
    const [phototUrl, setPhotoUrl] = useState("");
    const [bodyText, setBodyText] = useState("");
    const {selectedPostTrack} = useTrack();
    const {createPost} = useCreatePost();
    // const {setPosts, posts} = usePosts();
    const imageRef = useRef();
    const navigate = useNavigate();
    const imgBBKey = import.meta.env.VITE_IMGBB_API_KEY;

    const handleImageUpload = async (e) => {
        e.preventDefault();
        imageRef.current.click();
    }

    const handleSubmitPost = async (e) => {
        e.preventDefault();
        if(!bodyText) {
            toast.error("Write something on post!")
            return;
        }
        if(!selectedPostTrack){
            toast.error("Please choose a track to discuss!")
            return;
        }
        createPost(bodyText, phototUrl);
        // setPosts()
        navigate('/main')

    }


    const handleImageDisplay = async () => {
        try {
            const imageFile = imageRef.current.files[0];
            const formData = new FormData();
            formData.append("image", imageFile);

            const response = await fetch(`https://api.imgbb.com/1/upload?key=` + imgBBKey, {
                method: 'POST',
                body: formData
            });
            // const data = await response.json();
            // console.log(data.data.image.url);

            if (!response.ok) {
                toast.error('Failed to upload image');
            }
            if (response.status === 200) {
                const data = await response.json();
                console.log(data);
                setImagePreview(data?.data.image.url)
                setPhotoUrl(data?.data.image.url);
            }
        } catch (error) {

        }
    }

    const handleImageRemove = async (e) => {
        e.preventDefault();
        setImagePreview("")
        setPhotoUrl("");
    }

    return (
        <div className='w-full bg-gray-900 min-w-[420px] max-w-[480px] py-2 flex flex-col gap-4 items-center max-h-[1080px] overflow-scroll overflow-x-hidden scrollbar-hide'>
            <div className=' w-full'>
                <h1 className="chat-header text-3xl text-slate-50 font-bold px-3 pt-1">Create Post</h1>
            </div>

            <div className='flex flex-initial items-center w-full gap-2 px-5 py-1'>
                <div className='chat-image avatar'>
                    <div className='w-10 rounded-full'>
                        <img src={authUser.profilePicUrl} alt="chat bubble" />
                    </div>
                </div>
                <div className="flex items-center">
                    <span className='flex justify-start items-center label-text text-lg text-orange-100 font-bold text-center hover:underline'>{authUser.firstName} {authUser.lastName}</span>
                </div>
            </div>

            {imagePreview ? (
                <div className="preview-image p-2 relative">
                    <img src={imagePreview} alt='Preview' className='bg-zinc-300 rounded-sm' />
                </div>
            ) : null}

            <form className=' justify-center items-center gap-6 flex flex-auto' >
                <input type='file' id='file' ref={imageRef} onChange={handleImageDisplay} hidden></input>
                <button type='submit' onClick={handleImageUpload} className="w-40 p-2.5 bg-orange-50 rounded-[50px] border border-black justify-center items-center gap-2.5 inline-flex">
                    <div className="w-52 text-center text-zinc-800 text-[13px] font-medium font-['Inter'] leading-tight">Upload Post Image</div>
                </button>
                {imagePreview ? (
                    <button onClick={handleImageRemove} className="w-40 p-2.5 bg-orange-50 rounded-[50px] border border-black justify-center items-center gap-2.5 inline-flex">
                        <div className="w-52 text-center text-red-800 text-[13px] font-medium font-['Inter'] leading-tight">Remove Post Image</div>
                    </button>
                ) : null}

            </form>
            <form className='max-w-[480px] pt-2 flex flex-col gap-2 items-center'>
                <textarea
                    placeholder='Write something'
                    className='w-96 textarea-md h-40 rounded-md bg-orange-100 text-slate-950 resize-y'
                    value={bodyText}
                    onChange={(e) => setBodyText(e.target.value)}
                ></textarea>
                <div>

                </div>
            </form>
            <ChosenPostTrack />
            <TracksContainer />
            <div>
                <button onClick={handleSubmitPost} className="w-96 p-2.5 mb-2 bg-emerald-500 rounded-[50px] border border-black justify-center items-center gap-2.5 inline-flex">
                    <div className="w-52 text-center text-orange-50 text-[13px] font-semibold font-['Inter'] leading-tight">Post</div>
                </button>
            </div>
        </div>
    )
}

export default CreatePostForm