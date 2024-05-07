import { useState } from "react";
import useTrack from "../../store/useTrack";
import { useAuthContext } from "../../context/AuthContext";
import axios from "axios";

const useSearchTrack = () => {
    const {setTrackList} = useTrack();
    const [searchLoading, setSearchLoading] = useState(false);
    const {authUser} = useAuthContext();
    const searchTrack = async(query) => {
        setSearchLoading(true);
        try {
            const response = await axios.get('https://api.spotify.com/v1/search', {
                params: {
                  q: query,
                  type: 'track'
                },
                headers: {
                    Authorization: `Bearer ${authUser.accessToken}`
                }
            });
            const tracks = response.data.tracks.items.map(track => ({
                spotifyId: track.id,
                name: track.name,
                artist: track.artists[0].name,
                url: track.external_urls.spotify,
                coverPicUrl: track.album.images[0].url
            }));
            console.log(tracks);
            setTrackList(tracks);
        } catch (error) {
            console.log(error);
        } finally {
            setSearchLoading(false);
        }
    };
    return {searchLoading, searchTrack};
};
export default useSearchTrack;