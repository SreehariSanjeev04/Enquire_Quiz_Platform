import { useContext } from "react";
import { AuthContext, AuthProvider } from "./AuthContext";
import { Navigate } from "react-router-dom";
export const ProtectedRoutes = ({allowedUsers, children}) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) return <div>Loading...</div>;
    if (!user) return <Navigate to="/login" />;
    return (
        allowedUsers.includes(user.role) ? children : <Navigate to="/login" />
    )
}