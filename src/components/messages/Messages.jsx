import Message from "./Message"

const Messages = () => {
    return(
        <div className="flex justify-center items-center">
            <div className='w-[95%] border border-slate-900 rounded-md'>
            <div className='max-h-80 w-full px-4 flex-1 overflow-auto justify-center'>
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
        </div>
        </div>
        
    )
};

export default Messages;