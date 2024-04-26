import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";
import toast from  'react-hot-toast';
import  { useNavigate } from "react-router-dom"

const useLogout = () => {
    const  [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate(); 

    const logout = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${BACKEND_URL}/api/auth/logout`, {
                withCredentials: true
            });
            if(!response) throw new Error("Unsuccessful Logout");
            
            localStorage.removeItem("tracktalk-user");
            setAuthUser(null);
            navigate("/");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    return {loading, logout};
};
export default useLogout;