import React, { useState, createContext } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

export const RingContext = createContext('ring')

const Grandpa = () => {

    const [house, setHouse] = useState(1);

    const ornament = 'Diamond Ring'

    const handleBuyAHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse)
    }

    return (
        <RingContext.Provider value={ornament}>
            <div className='grandpa'>
                <h4>grandpa</h4>
                <button onClick={handleBuyAHouse} >Buy a house</button>
                <div style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;