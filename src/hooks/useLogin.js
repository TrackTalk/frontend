import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async (userName, password) => { 
        const success = handleInputErrors(userName, password);
        console.log(success)
        if(!success) return;
        setLoading(false);

        try {
            const response = await axios.post(`${BACKEND_URL}/auth/login`, {
                userName,
                password
            });
            localStorage.setItem("tracktalk-user", JSON.stringify(response.data));
            setAuthUser(response.data)
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    };

    return {loading, login}
};

export default useLogin;

function handleInputErrors (userName, password) {
    
    if(!userName || userName.trim() === "") {
        console.log("here again")
        toast.error("Username cannot be empty");
        return false;
    }
    if(!password || password.trim() === "") {
        toast.error("Password cannot be empty");
        return false;
    }
    return true;
}