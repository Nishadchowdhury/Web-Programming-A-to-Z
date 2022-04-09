import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>wellcome to t-shirt Mania</h2>

            <nav>
                <Link to="/home" >Home</Link>
                <Link to="/orderreviwe" >Order Reviwe</Link>
                <Link to='/grandpa'>Grandpa</Link>
            </nav>
        </div>
    );
};

export default Header;