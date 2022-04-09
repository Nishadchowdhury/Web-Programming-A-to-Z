import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import './App.css';
import app from './firebase.init';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [check, setCheck] = useState(false);
  const [name, setName] = useState('');


  //create user 

  const handleEmail = event => {
    setEmail(event.target.value)
  };


  const handlePassword = event => {
    setPassword(event.target.value)
  };

  const handleCheckBox = event => {
    setCheck(event.target.checked);
  };

  const handleNameBlur = event => {
    setName(event.target.value);
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      console.log('user name updated' + name);
      console.log( name);
    }).catch((error) => {
      console.error(error.message);
    });
  }


  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Password reset email sent!');
      })
      .catch((error) => {
        console.error(error.message);
      });
  }



  const sendVerification = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log('Email verification sent!')
        setError('')
      })
      .catch(error => {
        setError(error.message)
      })

  }



  // ------------- Handle Submit  --------------- //

  const handleSubmit = event => {
    event.preventDefault();

    //bootstrap validation
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      setError('')
      return;
    }

    if (!/(?=.*[@$!%*#?&])/.test(password)) {
      setError('plese add at least one spacial character');
      return
    }
    setError('')

    if (check) {

      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          const user = res.user;
          console.log(user);

        })
        .catch((error) => {
          setError(error.message);
        });

    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(res => {
          setUserName()
          console.log(res.user);
          console.log('create user successfully');
          sendVerification()
          setError('')
        })
        .catch(error => {
          console.log(error.message);
          setError(error.message);

        })
    }


    // console.log(email);
    // console.log(password);

  }



  return (
    <div className="w-50 m-auto mt-5">

      <h1 className="text-primary">Please {check ? 'Login' : 'registered'}!!!</h1>
      <Form onSubmit={handleSubmit} noValidate validated={validated} >

       { !check &&  <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Your Name</Form.Label>
          <Form.Control required onBlur={handleNameBlur} type="text" placeholder="Your Name" />
        </Form.Group>}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required onBlur={handleEmail} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required onBlur={handlePassword} type="password" placeholder="Password" />
        </Form.Group>

        {error.includes('wrong-password') && <Button className="my-3" variant="link" onClick={handlePasswordReset}>
          Forget Password ?
        </Button>}


        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onChange={handleCheckBox} type="checkbox" label="Already Registered ?" />
        </Form.Group>

        {error && <p className="text-danger" > {error} </p>}

        <Button variant="primary" type="submit">
          {check ? "Log In" : "Submit"}
        </Button>
      </Form>


    </div>
  );
}

export default App;
