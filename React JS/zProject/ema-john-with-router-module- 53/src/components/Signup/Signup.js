import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init'

const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const [createUserWithEmailAndPassword , user ] = useCreateUserWithEmailAndPassword(auth);



    const handleEmail = event => {
        setEmail(event.target.value)
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }

    if(user){
        navigate('/')
    }

    const handleCreateUser = event => {
        event.preventDefault();
        
       /*  if(password !== confirmPassword) {
            setError('both pass not same')
            return;
        }  */
            
            setError('')
            createUserWithEmailAndPassword(email, password)
            .then(res => {
                
                console.log('done')
                
            })
            .catch(error => {
                console.error(error?.message);
            })
            
            { user && console.log(user)}
            
    }


    return (
        <div className='form-container' >
            <div>

                <form onSubmit={handleCreateUser} >

                    <h2 className='form-title' >This is Sign Up</h2>

                    <div className='input-group'>

                        <label className='input-label' htmlFor="email">Email</label>
                        <input required onBlur={handleEmail} type="email" name='email' />

                    </div>

                    <div className='input-group'>

                        <label className='input-label' htmlFor="password">Password</label>
                        <input required onBlur={handlePassword} type="password" name='Password' />

                    </div>

                    <div className='input-group'>

                        <label className='input-label' onBlur={handleConfirmPassword} htmlFor="password">Confirm Password</label>
                        <input required type="password" name='Password' />

                    </div>

                    {error && <p> {error} </p>}

                    <input className='form-submit' type="submit" value="submit" />

                </form>
                <p>Already have an account ? <Link className='link-btn' to='/login'>Log in</Link> </p> <br /><br />

                <button className='google-btn' > Continue With Google  </button>
            </div>
        </div>
    );
};

export default Login;