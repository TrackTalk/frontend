import useConversation from "../../store/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    const {authUser} = useAuthContext();

    const myId = authUser.userId;
    let otherUserData
    if(selectedConversation ){
        const isUser1 = myId === selectedConversation.user1Id ? false : true;
        otherUserData = isUser1 ? selectedConversation.user1 : selectedConversation.user2;
    }

    // useEffect(() => {
    //     // return () => setSelectedConversation(null);
    //     return () => {
    //         if (selectedConversation) {
    //             setSelectedConversation(null);
    //         }
    //     };
    // }, [selectedConversation]);
    
    // const 
    // console.log(otherUserData)

    
    return (
        <div className='md:min-w-[350px] flex flex-col bg-gray-600 rounded-md'>
            {!selectedConversation ? (
                <NoChatSelected />
            ) : (
                <>
                    <div>
                        <h1 className="chat-header text-3xl text-orange-100 font-bold p-5">Send Message</h1>
                    </div>
                    {/* For no chat selection OR */}
                    <div className='bg-slate-500 px-4 py-2 mb-2 inline-flex items-center'>
                        <div className='w-20 h-20 rounded-full bg-slate-300'>
                            <img src="https://avatar.iran.liara.run/public" alt="chat bubble" />
                        </div>
                        <div className="flex items-center">
                            <span className='ml-4 h-20 flex justify-start items-center label-text text-xl text-orange-100 font-bold text-center'>{otherUserData? `${otherUserData.firstName} ${otherUserData.lastName}` : ""}</span>
                        </div>


                    </div>
                    <Messages />
                    <MessageInput />
                </>

            )}

        </div>
    )
};

const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    return (
        <div className='flex items-center justify-center min-h-96'>
            <div className=' text-center sm:text-lg md:text-xl text-orange-50 font-semibold flex flex-col items-center gap-2'>
                <p>Hello {authUser.firstName}</p>
                <p> Choose a conversation from above list </p>
                <p>OR</p>
                <p> Start a conversation from the posts </p>

            </div>
        </div>
    )
}

export default MessageContainer;