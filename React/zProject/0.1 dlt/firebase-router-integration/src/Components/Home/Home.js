import { getAuth } from '@firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)

const Home = () => {
    const {user} = useAuthState(auth)
    return (
        <div>
            
            <p>this home</p>
            {user && <p style={{color: 'red'}} >Nmae: {user.displayName}</p> }
        </div>
    );
};

export default Home;