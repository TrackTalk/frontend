import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL
const useRegister = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();
    
    

    const register = async({firstName, lastName, userName, password, confirmPassword, profilePicUrl, email}) => {
        const success = await handleInputsError({firstName, lastName, userName, password, confirmPassword, email})
        
        console.log(success);
        if(!success) {
            console.log("should return nothing")
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post(`${backendUrl}/auth/register`, {
                userName,
                firstName,
                lastName,
                password,
                profilePicUrl,
                spotifyLogin: false,
                email
            });
            console.log(response.data);
            setAuthUser(response.data)
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    };

    return {loading, register}


}

export default useRegister

async function handleInputsError ({firstName, lastName, userName, password, confirmPassword, email}) {
    if(!firstName || !lastName || !email || !password || !confirmPassword || !userName) {
        toast.error("Please fill out all fields");
        
        return false;
    }

    const userNameFound = await axios.get(`${backendUrl}/users/username/found/${userName}`);
    
    if (userNameFound.data.found){
        toast.error('Username already taken');
        console.log("toast should be herer")
        return false; 
    }

    const emailFound = await axios.get(`${backendUrl}/users/email/found/${email}`).data;
    if (emailFound.data.found){
        toast.error('Email Already Registered');
        return false; 
    }

    if(password !== confirmPassword) {
        toast.error('Passwords do not match');
        return false;
    } 
    // console.log(userNameFound.data.found);
    //... Password Rules here ...//

    return true;
}