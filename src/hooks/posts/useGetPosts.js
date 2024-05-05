import React, {useEffect, useState} from 'react'
import axios from 'axios';
import usePost from '../../store/usePost';
import toast from 'react-hot-toast';

const useGetPosts = () => {
    const [loading, setLoading] = useState(false);
    const {posts, setPosts} = usePost();
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        console.log("in get posts")
        const getPosts = async () => {
            setLoading(true);
            
            try {
                const res = await axios.get(`${BACKEND_URL}/api/posts`, {
                    withCredentials: true
                });
                setPosts(res.data)
            } catch (error) {
                toast.error(error.mesage);
            } finally {
                setLoading(false);
            }

        }
        getPosts();
    }, [])

    return {loading, posts};
}

export default useGetPosts;