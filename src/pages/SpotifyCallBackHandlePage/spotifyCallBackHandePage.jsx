import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import useRefreshToken from "../../hooks/auth/useRefreshToken";

const SpotifyCallBackHandle = () => {
    const location = useLocation();
    const {setAuthUser} = useAuthContext();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const loginStatus = params.get("loginStatus");
        const fetchData = async () => {
            if (loginStatus) {
                const loginStatusData = JSON.parse(decodeURIComponent(loginStatus));
                const userData = loginStatusData.foundUser;
                localStorage.setItem("tracktalk-user", JSON.stringify(userData));
                setAuthUser(userData);

                // Start refreshing the Spotify token
                // useRefreshToken();

                window.location.href = '/main';
            }
            setLoading(false);
        };

        setTimeout(fetchData, 2000);
        
    
      
    }, [location.search, setAuthUser]);

    return (
        <div className="flex items-center justify-center h-screen">
            {loading ? (
                <div className="flex items-center space-x-2">
                     <span className='loading loading-spinner'></span>
                     <h1 className='text-3xl font-semibold text-center text-orange-50 w-full'>Authenticating with Spotify</h1>
                </div>
            ) : (
                <div>
                    
                </div>
            )}
        </div>
    )
    
};

export default SpotifyCallBackHandle