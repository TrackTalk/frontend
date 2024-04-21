import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.userId === authUser.userId;
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const myId = authUser.userId;
    const isUser1 = myId === selectedConversation.user1Id ? false : true;
    const otherUserData = isUser1 ? selectedConversation.user1 : selectedConversation.user2;
    const profilePic = fromMe ? authUser.profilePicUrl : otherUserData.profilePicUrl;
    const bubbleBgColor = fromMe ? "bg-zinc-900" : "bg-emerald-500";

    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src={profilePic} alt="chat bubble" />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor} pb-2 max-w-52`}>{message.text}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>Time</div>

        </div>
    )
};
export default Message;