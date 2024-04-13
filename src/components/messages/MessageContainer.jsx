import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
    return (
        <div className='md:min-w-[350px] flex flex-col bg-gray-600 rounded-md'>
            <div>
                <h1 className="chat-header text-3xl text-orange-100 font-bold p-5">Send Message</h1>
            </div>
            {/* For no chat selection OR */}
            <div className='bg-slate-500 px-4 py-2 mb-2 inline-flex items-center'>
                <div className='w-20 h-20 rounded-full bg-slate-300'>
                    <img src="" alt="chat bubble" />
                </div>

                <span className='w-20 h-20 label-text text-base text-center'>To: sdfsdf</span>

            </div>
            <Messages />
            <MessageInput />
        </div>
    )
};

export default MessageContainer;