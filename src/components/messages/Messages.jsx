import { useRef,useEffect } from "react";
import useGetMessages from "../../hooks/conversation/useGetMessages";
import Message from "./Message"
import useListenMessages from "../../hooks/conversation/useListenMessages";

const Messages = () => {
    const { messages, loading } = useGetMessages();
    useListenMessages();
    const lastMessageRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100)
    }, [messages])

    return (
        <div className="flex justify-center items-center">
            <div className='w-[95%] border border-slate-900 rounded-md min-h-80'>
                <div className='max-h-80 w-full px-4 flex-1 overflow-auto justify-center'>
                    {!loading && messages.length > 0 &&
                        messages.map((message) => {
                            return (
                                <div key={message.messageId} ref={lastMessageRef}>
                                    <Message message={message} />
                                </div>
                            )
                        })

                    }
                    {!loading && messages.length === 0 && (
                        <p className="text-center">Start a conversation</p>
                    )}
                </div>
            </div>
        </div>

    )
};

export default Messages;