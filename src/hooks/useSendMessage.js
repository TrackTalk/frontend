import useConversation from "../store/useConversation";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    const { authUser } = useAuthContext();
    const myId = authUser.userId;
    const isUser1 = myId === selectedConversation.user1Id ? false : true;
    const otherUserData = isUser1 ? selectedConversation.user1 : selectedConversation.user2;
    const BACKEND_URL = `${import.meta.env.VITE_BACKEND_URL}/api`


    const sendMessage = async (message) => {
        setLoading(true);

        try {
            const response = await axios.post(`${BACKEND_URL}/messages/send/${otherUserData.userId}`, {
                text: message
            }, {
                withCredentials: true
            });
            const newMessage = response.data;
            if (!newMessage) throw new Error("No Message returned");
            setMessages([...messages, newMessage]);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return { sendMessage, loading };
}

export default useSendMessage