import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useCart from '../../hooks/useCart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart();
    const [pageCount, setPageCount] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);


    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            })
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page + 1}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [page, size]);




    // useEffect(() => {
    //     const storedCart = getStoredCart();
    //     const savedCart = [];
    //     for (const id in storedCart) {
    //         const addedProduct = products.find(product => product._id === id);
    //         if (addedProduct) {
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             savedCart.push(addedProduct);
    //         }
    //     }
    //     setCart(savedCart);
    // }, [products])


    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct._id);
    }

    return (
        <div className='shop-container'>
            <div className='mb-5 ' >
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>

                <div className='' >

                    <div className='mx-auto w-50' >
                        {
                            [...Array(pageCount).keys()].map(number => <button className={page === number ? `btn btn-success ms-2 ` : `ms-2 btn btn-primary `} onClick={() => setPage(number)} > {number + 1} </button>)
                        }
                        {/* {size} {page}  */}
                        <select onChange={e => setSize(e.target.value)}>
                            <option value="5"> 5</option>
                            <option value="10" selected >10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>       
                    </div>
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button>Review Order </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;