import React from 'react';
import TShirt from '../TShirt/TShirt';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {

    
    return (
        <div className='abslute-cart'>
            <h3> This is Cart {cart.length}</h3>
            {
                cart.map(tShirt => <p> {tShirt.name}
                    <button onClick={() => { handleRemoveFromCart(tShirt) }} >X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;