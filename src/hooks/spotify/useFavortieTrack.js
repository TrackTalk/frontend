import { useState,useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import axios from "axios";

const useFavortieTrack = (trackId) => {
    const { authUser } = useAuthContext();
    const [loading, setLoading] = useState(false);
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        const checkFavoriteTrack = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://api.spotify.com/v1/me/tracks/contains?ids=${trackId}`, {
                    headers: {
                        Authorization: `Bearer ${authUser.accessToken}`
                    }
                });
                setIsFav(response.data);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        };

        checkFavoriteTrack();
    }, [trackId]);

    const makeFavoriteTrack = async () => {
        setLoading(true);
        try {
            await axios.put(`https://api.spotify.com/v1/me/tracks?ids=${trackId}`, null, {
                headers: {
                    Authorization: `Bearer ${authUser.accessToken}`
                }
            });

            setIsFav(true);
        } catch (error) {
            console.log("Error favoriting the track: ", error);
        } finally {
            setLoading(false);
        }
    }

    const removeFavoriteTrack = async () => {
        setLoading(true);
        try {
            await axios.delete(`https://api.spotify.com/v1/me/tracks?ids=${trackId}`, {
                headers: {
                    Authorization: `Bearer ${authUser.accessToken}`
                }
            });
            setIsFav(false);
        } catch (error) {
            console.log("Failed to remove from the favorite library: ", error);
        } finally {
            setLoading(false);
        }
    }



    return { loading, isFav, makeFavoriteTrack, removeFavoriteTrack };

}

export default useFavortieTrack;