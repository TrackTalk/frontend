import { useState,useEffect } from "react";
import useTrack from "../../store/useTrack";
import { useAuthContext } from "../../context/AuthContext";
import axios from "axios";

const useGetTopTrack = () => {
    const {authUser} = useAuthContext();
    const [loading, setLoading] = useState(false);
    const {trackList, setTrackList} = useTrack();
    

    useEffect(() => {
        const getTopTrack = async() => {
            setLoading(true);
            try {
                const response = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
                    headers: {
                        Authorization: `Bearer ${authUser.accessToken}`
                    }
                });
                const tracks = response.data.items.map(track => ({
                    spotifyId: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    url: track.external_urls.spotify,
                    coverPicUrl: track.album.images[0].url,
                }));
                // console.log(tracks);
                setTrackList(tracks);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        };
        getTopTrack();
        
    },[setTrackList])

    return {loading, trackList};
}

export default useGetTopTrack;