import useConversation from "../../store/useConversation";
import { useState } from 'react';
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";


const useCreateConversation = () => {
    const [loading, setLoading] = useState(false);
    const {authUser} = useAuthContext();
    const {conversations, setConversations, setMessages, setSelectedConversation} = useConversation();
    const createConversation = async(user) => {
        setLoading(true);
        try {
            
            setMessages([]);
            const tempConversation = {
                user1Id: authUser.userId,
                user2Id: user.userId,
                user1: authUser,
                user2: user
            }

            setSelectedConversation(tempConversation);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return {createConversation, loading};
}

export default useCreateConversation;