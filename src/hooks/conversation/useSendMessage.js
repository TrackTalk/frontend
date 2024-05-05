import useConversation from "../../store/useConversation";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";
import useGetConversations from "./useGetConversations";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation, conversations, setConversations} = useConversation();
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
            console.log(response.data)
            const newMessage = response.data.newMessage;
            if (!newMessage) throw new Error("No Message returned");
            setMessages([...messages, newMessage]);

            if(response.data.newConversation) {
                const res = await axios.get(`${BACKEND_URL}/messages/all`, {
                    withCredentials: true,
                });
                // console.log(res);
                setConversations(res.data)
            }

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return { sendMessage, loading };
}

export default useSendMessage