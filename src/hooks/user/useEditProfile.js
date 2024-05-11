import { useState } from "react";
import toast from "react-hot-toast"
import { useAuthContext } from "../../context/AuthContext";
import axios from "axios";

const backendUrl = `${import.meta.env.VITE_BACKEND_URL}/api`
const useEditProfile = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser, authUser} = useAuthContext();

    const editProfile = async(updateData) => {
        console.log("update Data in profile", updateData);
        const password = updateData?.password;
        const confirmPassword = updateData?.confirmPassword;
        const success = handleInputError({password, confirmPassword});
        if(!success) {
            return;
        }
        const prepareData = {
            userName: updateData.userName?  updateData.userName : authUser.userName, 
            firstName: updateData.firstName? updateData.firstName : authUser.firstName,
            lastName: updateData.lastName? updateData.lastName : authUser.lastName,
            email: updateData.email? updateData.email : authUser.email,
            profilePicUrl: updateData.profilePicUrl? updateData.profilePicUrl: authUser.profilePicUrl,
            coverPicUrl: updateData.coverPicUrl? updateData.coverPicUrl: authUser.coverPicUrl,
        }
        console.log("prepare Data in profile", prepareData);
        setLoading(true);
        try {
            const response = await axios.put(`${backendUrl}/users/${authUser.userId}/update`, prepareData, {
                withCredentials: true
            });
            console.log(response.data[1][0]);
            localStorage.setItem("tracktalk-user", JSON.stringify(response.data[1][0]));
            setAuthUser(response.data[1][0]);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return {loading, editProfile}

}

export default useEditProfile

async function handleInputError ({firstName, lastName, userName, password, confirmPassword, email}) {
    if(password && confirmPassword) {
        if(password !== confirmPassword) {
            toast.error('Passwords do not match');
            return false;
        } 
    }
    return true;
}