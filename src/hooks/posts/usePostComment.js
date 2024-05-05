import React from 'react'
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import usePost from '../../store/usePost';
import { useAuthContext } from '../../context/AuthContext';

const usePostComment = () => {
    const [loading, setLoading] = useState(false);
    const { selectedPost, comments, setComments } = usePost();
    const { authUser } = useAuthContext();
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    const postComment = async(comment) => {
        setLoading(true);
        try{
            const response = await axios.post(`${BACKEND_URL}/api/posts/${selectedPost.postId}/comments/create/${authUser.userId}`, {
                text: comment
            }, {
                withCredentials: true
            });

            const newComment = response.data;
            if(!newComment) throw new Error ("Comment was not created");
            setComments([...comments, newComment]);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return {postComment, loading};
    
}

export default usePostComment