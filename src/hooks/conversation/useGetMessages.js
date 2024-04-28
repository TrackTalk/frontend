import { useEffect, useState } from "react"
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";
import axios from 'axios';
import toast from "react-hot-toast";

const useGetMessages = () => {
    
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    const {authUser} = useAuthContext();
    const BACKEND_URL = `${import.meta.env.VITE_BACKEND_URL}/api`
    
    const myId = authUser.userId;
    let otherUserData;
    
    if(selectedConversation) {
        const isUser1 = myId === selectedConversation.user1Id ? false : true;
        otherUserData = isUser1 ? selectedConversation.user1 : selectedConversation.user2;
    }
    

    useEffect(() => {
        const getMessages = async() => {
            setLoading(true);
            
            try {
                if(selectedConversation) {
                    // console.log(otherUserData.userId)
                    const response = await axios.get(`${BACKEND_URL}/messages/get/${otherUserData.userId}`, {
                        withCredentials: true
                    });
                    console.log(response);
                    if (!response) throw new Error("No data in server's response");
                    
                    setMessages(response.data);
                }
                

            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        if(selectedConversation?.conversationId) getMessages();
    }, [selectedConversation?.conversationId, setMessages]);

    return {messages, loading};
}

export default useGetMessages