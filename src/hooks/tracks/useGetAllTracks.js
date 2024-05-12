import { useState, useEffect } from "react";
import axios from "axios";

const useGetAllTracks = () => {
    const [tracks, setTracks] = useState([]);
    const [trackCount, setTrackCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    useEffect(() => {
        const getAllTracks = async() => {
            try {
                setLoading(true);
                const response = await axios.get(`${BACKEND_URL}/api/tracks`)
                if(!response.data) console.log("Internal Server Error - Get All Tracks");
                else {
                    setTracks(response.data.tracks);
                    setTrackCount(response.data.totalCount);
                }
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        }
        getAllTracks()
    }, [])
    return {loading, tracks, trackCount};
}

export default useGetAllTracks
