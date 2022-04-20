import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router';
import { getAuth } from '@firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app)
const RequirAuth = ({children}) => {
    const [user] = useAuthState(auth);
    console.log(user);
    const location = useLocation();


    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};
 
export default RequirAuth;