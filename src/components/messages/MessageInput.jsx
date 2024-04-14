import { BsSend } from "react-icons/bs"

const MessageInput = () => {
    return (
        <div>
            <form className='px-4 my-3 flex items-center gap-1'>
                <div className='w-10 h-10 rounded-full'>
                    <img src="https://avatar.iran.liara.run/public" alt="chat bubble" />
                </div>
                <div className='w-full relative flex items-center'>
                        <input
                            type="text"
                            className='border text-sm rounded-lg block w-full p-2 bg-orange-50 text-black'
                            placeholder='Send a message'
                        />
                    <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'><BsSend /></button>
                </div>
            </form>
        </div>
    )
};

export default MessageInput;