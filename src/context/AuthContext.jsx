import { createContext, useContext, useState } from "react";
export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthContextProvider  = ({ children }) => {
    // State for keeping if user is authenticated or not.
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("tracktalk-user")) || null);
    return <AuthContext.Provider value={{authUser, setAuthUser}}>{children}</AuthContext.Provider>
}