import React from 'react';
import logo2 from '../../../images/logo2.png'

const Header = () => {
    return (
        <nav className='h-16 flex flex-row justify-between items-center px-12 p-3 ' >

            <img className='h-full' src={logo2} alt="" />

            <div className='flex flex-row gap-x-8 font-medium ' >
                <h1> cart </h1>
                <h1> Log in </h1>
                <h1> Sign Up </h1>
            </div>

        </nav>
    );
};

export default Header;