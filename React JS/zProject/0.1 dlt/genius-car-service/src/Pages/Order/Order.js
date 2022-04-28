import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState, } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import { signOut } from "firebase/auth";

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        console.log(user);

        const getOrders = async () => {
            const email = user?.email;
            const url = `https://mighty-crag-66119.herokuapp.com/order?email=${email}`
            try {

                const { data } = await axiosPrivate.get(url);
                setOrders(data);

            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate("/login")
                }
            }
        }


        getOrders()
    }, [user])

    return (
        <div className='w-50 mx-auto' >
            <h2>Your Orders: {orders.length}</h2>
            {
                orders.map(order => <div key={order._id}> 
                <p>{order.email}: {order.service}</p>
                 </div> )
            }
        </div>
    );
};

export default Order;