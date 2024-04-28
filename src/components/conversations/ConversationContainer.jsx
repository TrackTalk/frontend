import Conversations from "./Conversations";
import SearchConversations from "./SearchConversations";

const ConversationContainer = () => {
     return(
        <div className='max-w-96 w-80 rounded-md p-1 flex flex-col bg-gray-600'>
            <div>
                <h1 className="chat-header text-3xl text-orange-100 font-bold p-3">Messages</h1>
            </div>
            <SearchConversations />
            {/* <div className='divider'></div> */}
            <Conversations />
        </div>
     )
}

export default ConversationContainer;