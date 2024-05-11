import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";
const useFollowUser = () => {
    const [loading, setLoading] = useState(false);
    const {authUser} = useAuthContext();
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

    const followUser = async (userId) => {
        setLoading(true);
        try {
            const res = await axios.post(`${BACKEND_URL}/api/users/${userId}/follow/${authUser.userId}`);
            if(!res.data) throw new Error ("Internal Server error");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    const unfollowUser = async (userId) => {
        setLoading(true);
        try{
            const res = await axios.delete(`${BACKEND_URL}/api/users/${userId}/unfollow/${authUser.userId}`);
            if(!res.data) throw new Error ("Internal Server error");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return { loading, followUser, unfollowUser };

}

export default useFollowUser;