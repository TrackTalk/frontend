import React, { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const useLikePost = () => {
    const [loading, setLoading] = useState(false);
    const { authUser } = useAuthContext();
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

    const likePost = async (postId) => {
        setLoading(true);
        try {
            const res = await axios.post(`${BACKEND_URL}/api/posts/${postId}/like/${authUser.userId}`);
            if (!res.data) throw new Error("Internal Server error");

        } catch (error) {
            toast.error(error.message);

        } finally {
            setLoading(false);
        }
    }

    const removeLikePost = async (postId) => {
        setLoading(true);
        try {
            const res = await axios.delete(`${BACKEND_URL}/api/posts/${postId}/removeLike/${authUser.userId}`);
            if(!res.data) throw new Error("Internal Server error");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { removeLikePost, likePost, loading };

}

export default useLikePost