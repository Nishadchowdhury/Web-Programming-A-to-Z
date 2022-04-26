import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const Shipment = () => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const email = user?.email;

    const handleName = event => {
        setName(event.target.value)
    }
    const handleAddress = event => {
        setAddress(event.target.value)
    }
    const handlePhone = event => {
        setPhone(event.target.value)
    }


    // console.log(name, address , phone );


    const handleCreateUser = event => {
        event.preventDefault();

        const shipping = {name , email , address , phone};
        console.log(shipping);

            setError('')


    }

    return (
        <div className='form-container' >
            <div>

                <form onSubmit={handleCreateUser} >

                    <h2 className='form-title' >Your Shipping Info</h2>

                    <div className='input-group'>

                        <label className='input-label' htmlFor="email">Email</label>
                        <input required value={user?.email} readOnly type="email" name='email' />

                    </div>

                    <div className='input-group'>

                        <label className='input-label' htmlFor="name">Name</label>
                        <input required onBlur={handleName} type="text" name='email' />

                    </div>

                    <div className='input-group'>

                        <label className='input-label' htmlFor="address">Address</label>
                        <input required onBlur={handleAddress} type="text" name='Address' />

                    </div>


                    <div className='input-group'>

                        <label className='input-label' htmlFor="Phone">Phone</label>
                        <input required onBlur={handlePhone} type="number" name='Phone' />

                    </div>

                    {error && <p> {error} </p>}

                    <input className='form-submit' type="submit" value="submit" />

                </form>
                <p>  </p> <br /><br />

                <button className='google-btn' > Continue With Google  </button>
            </div>
        </div>
    );
};

export default Shipment;