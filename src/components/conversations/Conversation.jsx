import { useAuthContext } from "../../context/AuthContext";
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../store/useConversation";

const Conversation = ({conversation, lastIndex}) => {
    const {authUser} = useAuthContext();
    const myId = authUser.userId;
    const isUser1 = myId === conversation.user1Id ? false : true;
    const otherUserData = isUser1 ? conversation.user1 : conversation.user2;

    const {selectedConversation, setSelectedConversation} = useConversation()
    const isSelected = selectedConversation?.conversationId === conversation.conversationId;
    const {onlineUsers} = useSocketContext();

    console.log(conversation);
    
    const isOnline = onlineUsers.includes(`${otherUserData.userId}`);
    // console.log(onlineUsers.includes(parseInt(otherUserData.userId)));


    return (
        <div className="">
            <div 
                className={`flex gap-2 items-center rounded px-3 py-3 hover:bg-slate-800 cursor-pointer
                ${isSelected && 'bg-slate-800'}`}
                onClick={()=>{setSelectedConversation(conversation)}}

                >
                <div className = {`avatar ${isOnline ? "online" : ""}`}>
                    <div className='w-12 rounded-full bg-slate-600'>
                        <img src={`${otherUserData.profilePicUrl? otherUserData.profilePicUrl : "https://avatar.iran.liara.run/public"}`} alt="" />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-orange-100'>{otherUserData.firstName} {otherUserData.lastName}</p>
                    </div>

                </div>


            </div>
            {!lastIndex && <div className='divider my-1 py-0 mx-2 h-[2px] bg-white/20' />}
            
        </div>

    )
}
export default Conversation;