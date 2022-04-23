import './App.css';
import app from "./firebase.init";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile

} from "firebase/auth";


const auth = getAuth(app);

function App() {

  //states 
  const [validated, setValidated] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleNameBlur = event =>{
    setName(event.target.value)
  }

  const handleEmailBlur = event => {
    setEmail(event?.target.value)

  }


  const handlePassBlur = event => {
    setPassword(event?.target.value)

  }

  const handleRegisteredChange = event => {
    setRegistered(event.target.checked);
  }

  const handleSubmit = event => {
    event.preventDefault();


    const form = event.currentTarget;

    if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError('Password Should contain al least one spacial character ')
      return;
    }

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true)
      return;

    }

    setError('')

    //createing user w8 pass
    if (registered) {

      signInWithEmailAndPassword(auth, email, password)
        .then(res => {
          const user = res.user;
          console.log(user);
        })
        .catch(error => {
          setError(error.message)
        })

    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(res => {
          const user = res.user;
          console.log(user);
          setEmail('')
          setPassword('')
          setUserName()
          verifyEmail()
          
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.error(error);
          setError(error.message)
        });

    }


    event.preventDefault()
  }

  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Verification mail send');
      })
  }

  const setUserName = ( ) => {
    updateProfile(auth.currentUser, {
      displayName: name
     
    })
    .then(()=>{
      console.log('updating name');
    })
    .catch(error =>{
      setError(error.message)
    })
  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log('Email Verification send ');
      })
  }

  return (
    <div className="w-50 m-auto">

      <div className="registration mt-3 ">
        <h1 className='text-primary'> Please {registered ? 'Login' : 'Registration'}  !!!</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit} >

        { !registered && <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label >Your Name</Form.Label>
            <Form.Control required onBlur={handleNameBlur} type="text" placeholder="Your Name" />
          </Form.Group>}


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required onBlur={handlePassBlur} type="password" placeholder="Password" />
          </Form.Group>
          <p className='text-danger'>{error}</p>
          <Button variant="link" onClick={handlePasswordReset} > Forget password ?!</Button> <br /><br />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Password.
          </Form.Control.Feedback>


          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onChange={handleRegisteredChange} type="checkbox" label="Already Registered ?" />
          </Form.Group>

          <Button variant="primary" type="submit">
            {!registered ? 'Submit' : 'Log In'}
          </Button>
        </Form>
      </div>

    </div>
  );
}

export default App;