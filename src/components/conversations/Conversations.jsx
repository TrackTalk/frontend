import Conversation from "./Conversation";

const Conversations = () => {
    return(
        <div className="flex justify-center items-center">
            <div className='max-h-96 my-2 w-[96%] py-2 flex flex-col overflow-auto border border-black'>
            <Conversation />
            
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
        </div>
        </div>
        
    )
}
export default Conversations;