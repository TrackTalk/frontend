import { IoSearchSharp } from "react-icons/io5";

const SearchConversations = () => {
    return(
        <div className=''>
            <form className=' flex items-center gap-1'>
                <input type="text" placeholder="Search Users..." className='w-full input input-bordered rounded-full text-slate-900 bg-orange-50'/>
                <button type='submit' className="btn btn-circle bg-emerald-500 text-white">
                    <IoSearchSharp className='outline-none'/>
                </button>
            </form>
        </div>
    )
}

export default SearchConversations;