import React, { useState, useEffect } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import usePost from '../../store/usePost';


const useGetAPost = (postId) => {
    const [loading, setLoading] = useState(false);
    const { selectedPost, setSelectedPost, setComments } = usePost();
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    console.log("get a post ", postId)
    console.log("get a post ", selectedPost)


    useEffect(() => {
        const getThePost = async () => {
            console.log("in get a post : ")
            console.log(`${BACKEND_URL}/api/posts/${postId}`);
            setLoading(true);

            try {
                const res = await axios.get(`${BACKEND_URL}/api/posts/${postId}`);

                console.log("post Data ", res.data);
                setSelectedPost(res.data);
                setComments(res.data.comments);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }
        getThePost();
    }, [postId])

    return { loading, selectedPost };
}

export default useGetAPost;