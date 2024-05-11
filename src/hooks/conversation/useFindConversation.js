import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import useConversation from '../../store/useConversation';
import { useAuthContext } from '../../context/AuthContext';
// import useGetMessages from './useGetMessages';
import useListenMessages from './useListenMessages';

const useFindConversation = () => {
    const [loading, setLoading] = useState(false);
    const {selectedConversation, setSelectedConversation, setMessages, messages} = useConversation()
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    useListenMessages();
    const findConversation = async(userId) => {
        setLoading(true);
        try {
            
            setSelectedConversation(null);
            const response = await axios.get(`${BACKEND_URL}/api/messages/get/${userId}`, {
                withCredentials: true
            });
            if(!response || response.status === 404) return false;
            const conversation = response.data;
            await setSelectedConversation(conversation);
            const message = await axios.get(`${BACKEND_URL}/api/messages/get/${userId}`, {
                withCredentials: true
            });
            console.log(message);
            if (!message) throw new Error("No data in server's response");
            
            await setMessages(message.data.messages);
            // useListenMessages();
            
            // if(selectedConversation) {
            //     // console.log(otherUserData.userId)
                

            // }

            return true;

        } catch (error) {
            console.log("Error finding conversation: ", error)
        } finally {
            setLoading(false);
        }
    };
    return {findConversation, loading};

}

export default useFindConversation