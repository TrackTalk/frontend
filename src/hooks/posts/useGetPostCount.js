import { useState, useEffect } from "react";
import axios from "axios";

const useGetPostCount = () => {
    const [postCount, setPostCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    useEffect(() => {
        const getPostCount = async() => {
            try {
                setLoading(true);
                const response = await axios.get(`${BACKEND_URL}/api/posts/count`)
                if(!response.data) console.log("Internal Server Error - Get Post Count");
                else {
                    setPostCount(response.data);
                }
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        }
        getPostCount();
    }, [])
    return {loading, postCount};
}

export default useGetPostCount;