import React, { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Shared/Loading/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [success, setSuccess] = useState('kkkhjh');
    const [error , setError] = useState('');
    
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    
    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;

};

export default PrivateRoute;