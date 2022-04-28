// import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useServiceDetail from '../../../Hooks/useServiceDetail';
// import axios from 'axios';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user, loading, error] = useAuthState(auth);



    // const [user , setUser] = useState({
    //     name: 'Akbor the grate',
    //     email: 'akboR@momo.com',
    //     address: "tajmohal road md.pur",
    //     phone: "00045325432554"
    // })

    // const handleAddressChange =  event => {
    //     console.log(event.target.value);
    //     const {address , ...rest} = user;
    //     const newAddres = event.target.value;
    //     const newUser = { address: newAddres, ...rest};
    //     console.log(newUser);
    //     setUser(newUser)
    // }

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            service: service.name,
            email: event.target.email.value,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        // axios.post('', order)
        // .then(response =>{
        //     console.log(response);
        // } )

        const url = `https://mighty-crag-66119.herokuapp.com/order`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    toast('Your order Is Booked');
                    event.target.reset();
                }
            })

    }

    return (
        <div className='w-50 mx-auto' >
            <h2>Please Order : {service.name}</h2>

            <form onSubmit={handlePlaceOrder} >
                <input className='w-100 mb-2' type="text" name="name" id="" placeholder='name' value={user?.displayName} disabled required />
                <br />
                <input className='w-100 mb-2' type="email" name="email" id="" placeholder='email' value={user?.email} disabled required />
                <br />
                <input className='w-100 mb-2' type="text" name="name" id="" placeholder='service' value={service.name} required />
                <br />
                <input className='w-100 mb-2' type="text" name="address" id="" placeholder='address' value={user?.address} required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" id="" placeholder='phone' value={user?.phone} required />
                <br />

                <input className='btn btn-primary' type="submit" value="Place Order" />

            </form>
        </div>
    );
};

export default Checkout;