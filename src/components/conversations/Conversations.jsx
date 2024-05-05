import useGetConversations from "../../hooks/conversation/useGetConversations";
import Conversation from "./Conversation";
import { useAuthContext } from "../../context/AuthContext";

const Conversations = () => {
    const {loading, conversations} = useGetConversations();
    // const {authUser} = useAuthContext();
    // console.log(authUser);
    console.log(conversations);
    return(
        <div className="flex justify-center items-center">
            <div className='max-h-96 min-h-80 my-2 w-[96%] py-2 flex flex-col overflow-auto border border-black'>
            {
                conversations.map((conversation, index) => {
                    return(
                        <Conversation 
                        key={conversation.conversationId}
                        conversation={conversation}
                        lastIndex={index === conversations.length - 1 }
                    />
                    )
                    
                })
            }
            {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
        </div>
        </div>
        
    )
}
export default Conversations;