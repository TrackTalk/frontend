import Message from "./Message"

const Messages = () => {
    return(
        <div className='mx-[0.85rem] w-11/12 flex flex-col border border-slate-900 rounded-md'>
            <div className='w-full px-4 flex-1 overflow-auto justify-center'>
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
        </div>
    )
};

export default Messages;