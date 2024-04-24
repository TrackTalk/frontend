import { useEffect, useRef } from "react";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const useRefreshToken = () => {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const { setAuthUser, authUser } = useAuthContext();
    useEffect(() => {
        const refreshInterval = setInterval(async () => {
            try {
                const userData = JSON.parse(localStorage.getItem("tracktalk-user"));
                if (userData && userData.refreshToken) {
                    const res = await axios.get(`${BACKEND_URL}/api/auth/refreshToken`, {
                        withCredentials: true
                    });
                    const newAccessToken = res.data;
                    if (userData.accessToken !== newAccessToken) {
                        localStorage.setItem("tracktalk-user",
                            JSON.stringify({ ...userData, accessToken: newAccessToken })
                        );
                        setAuthUser({ ...userData, accessToken: newAccessToken });
                    }

                }

            } catch (error) {
                console.log("Error refreshing token: ", error);
            }
        }, 100000); //

        return () => clearInterval(refreshInterval);
    }, [setAuthUser]);
    return null;
};

export default useRefreshToken;