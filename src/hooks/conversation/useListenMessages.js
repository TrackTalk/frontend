import React, { useEffect } from 'react'
import { useSocketContext } from '../../context/SocketContext'
import useConversation from '../../store/useConversation'

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation();

    useEffect(() => {
        console.log("here");
        socket?.on("newMessage", (newMessage) => {
            setMessages([...messages, newMessage])
            console.log(messages);
        });

        return () => socket?.off("newMessage");
    }, [socket, setMessages, messages])
};

export default useListenMessages