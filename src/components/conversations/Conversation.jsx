const Conversation = () => {
    return (
        <div className="">
            <div className='flex gap-2 items-center rounded px-3 py-3 hover:bg-slate-800 cursor-pointer'>
                <div className='avatar online'>
                    <div className='w-12 rounded-full bg-slate-600'>
                        <img src="https://avatar.iran.liara.run/public" alt="" />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-orange-100'>John Doe</p>
                    </div>

                </div>


            </div>
            <div className='divider my-1 py-0 mx-2 h-[2px] bg-white/20'></div>
        </div>

    )
}
export default Conversation;