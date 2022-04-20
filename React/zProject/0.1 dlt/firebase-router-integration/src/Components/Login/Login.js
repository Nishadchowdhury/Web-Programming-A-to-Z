import React from 'react';
import app from '../../firebase.init';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { getAuth } from '@firebase/auth';
import { useLocation, useNavigate } from 'react-router';


const auth = getAuth(app)

const Login = () => {

    const [SignInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    console.log(location);

    const handleGoogleSingIn = () => {
        SignInWithGoogle()
        .then(()=>{
            navigate(from, {replace : true})
        })
    };

    return (
        <div>
            <h3>please log in</h3>

            <div style={{margin:'20px'}} className="">
                <button onClick={handleGoogleSingIn} > Google Sing In</button>
            </div>

            <form >
                <input type="email" placeholder='Your Email' /> <br />

                <input type="password" placeholder='password' /> <br />

                <input type='submit' value='Register' />
            </form>
        </div>
    );
};

export default Login;