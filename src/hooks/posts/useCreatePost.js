import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";
import useTrack from "../../store/useTrack";
import { useState } from "react";
import usePost from "../../store/usePost";

const useCreatePost = () => {
    const [loading, setLoading] = useState(false);
    const { authUser } = useAuthContext();
    const { selectedPostTrack } = useTrack();
    const { posts, setPosts } = usePost();
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    const createPost = async (bodyText, photoUrl) => {
        setLoading(true);
        try {
            const trackRes = await axios.post(`${BACKEND_URL}/api/tracks/create`, {
                spotifyId: selectedPostTrack.spotifyId,
                name: selectedPostTrack.name,
                artist: selectedPostTrack.artist,
                url: selectedPostTrack.url,
                coverPicUrl: selectedPostTrack.coverPicUrl
            });
            if (!trackRes) throw new Error("Error on creating track");
            const postRes = await axios.post(`${BACKEND_URL}/api/posts/create`, {
                userId: authUser.userId,
                trackId: trackRes.data.trackId,
                bodyText,
                attachPhoto: photoUrl ? true : false,
                photoUrl: photoUrl ? photoUrl : null,
                likesCount: 0
            })

            if (!postRes) throw new Error("Error on creating post");
            const res = await axios.get(`${BACKEND_URL}/api/posts`, {
                withCredentials: true
            });
            setPosts(res.data)
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return { createPost, loading };
}

export default useCreatePost