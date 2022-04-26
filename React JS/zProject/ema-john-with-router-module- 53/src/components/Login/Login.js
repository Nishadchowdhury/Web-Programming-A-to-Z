import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init'
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    //sing functionality of react hooks
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleEmail = event => {
        setEmail(event.target.value)
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }

    console.log();

    const handleGeteUser = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)



    }

    if (user) {
        navigate(from, {replace: true})
    }

    return (
        <div className='form-container' >
            <div>

                <form onSubmit={handleGeteUser} >

                    <h2 className='form-title' >This is Login</h2>

                    <div className='input-group'>

                        <label className='input-label' htmlFor="email">Email</label>
                        <input required onBlur={handleEmail} type="email" name='email' />

                    </div>

                    <div className='input-group'>

                        <label className='input-label' htmlFor="password">Password</label>
                        <input required onBlur={handlePassword} type="password" name='Password' />

                    </div>

                    <p>{error?.message}</p>
                    { loading &&
                        <p>{loading}</p>
                    }
                    <input className='form-submit' type="submit" value="submit" />

                </form>
                <p>New to ema-john ? <Link className='link-btn' to='/signup'>Sign up</Link> </p> <br /><br />

                <button className='google-btn' > Continue With Google  </button>
            </div>
        </div>
    );
};

export default Login;