import React, { useEffect, useState } from 'react'
import axios from 'axios'
import usePost from '../../store/usePost'

const useGetUserPost = (userId) => {
    const [loading, setLoading] = useState(false);
    const { posts, setPosts, postOwner, setPostOwner } = usePost();
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        const getUserPost = async () => {
            setLoading(true);
            try {
                console.log(`${BACKEND_URL}/api/users/${userId}`)
                const postRes = await axios.get(`${BACKEND_URL}/api/posts/users/${userId}`, {
                    withCredentials: true
                });
                
                const userRes = await axios.get(`${BACKEND_URL}/api/users/${userId}`,{
                    withCredentials: true
                });

                const followRes = await axios.get(`${BACKEND_URL}/api/users/${userId}/allFollowers`, {
                    withCredentials: true
                })

                const userData = {
                    user: userRes.data,
                    follow: followRes.data,
                }
                if(!postRes && !userRes) return;
                console.log("user data", userData)
                setPostOwner(userData);
                setPosts(postRes.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        getUserPost();

    }, [])


    return {loading, posts, postOwner};
}

export default useGetUserPost