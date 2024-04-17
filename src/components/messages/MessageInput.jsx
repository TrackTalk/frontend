import { BsSend } from "react-icons/bs"
import React, { useState } from 'react';
import useSendMessage from "../../hooks/useSendMessage";
import { useAuthContext } from "../../context/AuthContext";

const MessageInput = () => {
    const [message, setMessage] = useState("");
    const { sendMessage, loading } = useSendMessage();
    const {authUser} = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!message) return;
        await sendMessage(message);
        setMessage("")
    }

    return (
        <div>
            <form className='px-4 my-3 flex items-center gap-1' onSubmit={handleSubmit}>
                <div className='w-10 rounded-full'>
                    <img src={authUser.profilePicUrl} alt="chat bubble" className="rounded-full" />
                </div>
                <div className='w-full relative flex items-center'>
                    <input
                        type="text"
                        className='border text-sm rounded-lg block w-full p-2 bg-orange-50 text-black'
                        placeholder='Send a message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'><BsSend /></button>
                </div>
            </form>
        </div>
    )
};

export default MessageInput;