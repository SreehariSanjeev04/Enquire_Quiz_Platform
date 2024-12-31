import { createContext } from "react";
import { useEffect, useState } from "react";
export const AuthContext = createContext();

export const fetchDataFromLocalStorage = () => {
    const token = localStorage.getItem('enquireUserToken');
    if(!token) return null;

    const payload = JSON.parse(atob(token.split('.')[1]));
    console.log(payload);
    if(!payload || payload.exp * 1000 <= Date.now()) return null;

    return payload;
}
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchedUser = fetchDataFromLocalStorage();
        setUser(fetchedUser);
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

