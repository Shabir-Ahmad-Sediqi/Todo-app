import React from 'react';
import { Navigate } from "react-router-dom";
import { isAuthenticated } from '../services/authserveces'
import { useState } from 'react';
import { useEffect } from 'react';

function ProtectedRoutes({ children }) {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
    const checkAuth = async () => {
        try {
            const result = await isAuthenticated();
            setAuth(result);
        } catch (err) {
            console.log(err)
            setAuth(false); // force redirect if there's any error
        }
    };
    checkAuth();
}, []);
    if (auth === null) {
        return <div>Loading...</div>;
    }
    if (!auth) return <Navigate to="/login"/>

    return children
}

export default ProtectedRoutes
