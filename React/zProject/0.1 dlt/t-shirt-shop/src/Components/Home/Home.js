import React, { useState } from 'react';
import useTshirts from '../../Hooks/useTshirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {

    const [tShirts, setTShirts] = useTshirts();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {

        const exist = cart.find(tShirt => tShirt._id === selectedItem._id);
        if (!exist) {
            const newCart = [...cart, selectedItem]
            setCart(newCart)
        }else{
            alert('item already added')
        }
    }

    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest)
    }

    return (
        <div className='home-container'>

            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt.index}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>

            <div className="cart-container">
                <div className="cart">
                    <Cart
                        cart={cart}
                        handleRemoveFromCart={handleRemoveFromCart}
                    >

                    </Cart>
                </div>
            </div>

        </div>
    );
};

export default Home; <h1>this is home</h1>