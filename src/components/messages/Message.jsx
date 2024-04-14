const Message = () => {
    return (
        <div className={`chat chat-start`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src="https://avatar.iran.liara.run/public" alt="chat bubble" />
                </div>
            </div>
            <div className={`chat-bubble text-white pb-2`}>Message</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>Time</div>

        </div>
    )
};
export default Message;