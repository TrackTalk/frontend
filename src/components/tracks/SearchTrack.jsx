import { IoSearchSharp } from "react-icons/io5";
import useSearchTrack from "../../hooks/spotify/useSearchTrack";
import { useState } from "react";

const SearchTrack = () => {
    const [query, setQuery] = useState('');
    const {searchTrack} = useSearchTrack();

    const handleSearchTrack = (e) => {
        e.preventDefault();
        if (!query) return;
        searchTrack(query);
    }
    return(
        <div className='px-2 pb-1'>
            <div className=' w-full'>
                <h1 className="chat-header text-2xl text-emerald-50 font-bold px-2 pb-1 ">Choose Track</h1>
            </div>
            <form className='flex items-center gap-1' onSubmit={handleSearchTrack}>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search Tracks..." className='w-full h-8 input input-bordered textarea-sm rounded-full text-slate-900 bg-orange-50'/>
                <button type='submit' className="rounded-full h-9 w-10 bg-emerald-500 text-white flex items-center justify-center">
                    <IoSearchSharp className='outline-none'/>
                </button>
            </form>
        </div>
    )
}

export default SearchTrack;