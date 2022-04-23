import { getAuth, signOut } from '@firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';

import './Header.css'

const auth = getAuth(app)

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    
    return (
        <div className='header' >

            <nav>
                <Link to='/' >Home</Link>
                <Link to='/products' >Products</Link>
                <Link to='/register' >Register</Link>
                <Link to='/orders' >Orders</Link>
                {
                    user?.uid
                    ?
                    <button onClick={() => signOut(auth)} >sing Out</button>
                    :
                    <Link to='/login' >Login</Link>
                }
                <span> {user && user.displayName}</span>
                
            </nav>

        </div>
    );
};

export default Header;