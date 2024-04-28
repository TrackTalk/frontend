import React, { useEffect, useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import useConversation from '../../store/useConversation';

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    // const [conversations, setConversations] = useState([]);
    const {conversations, setConversations} = useConversation();
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);

            try {
                const res = await axios.get(`${BACKEND_URL}/api/messages/all`, {
                    withCredentials: true,
                });
                // console.log(res);
                setConversations(res.data)

            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }

        getConversations();
    }, [])

    return {loading, conversations};
}

export default useGetConversations;