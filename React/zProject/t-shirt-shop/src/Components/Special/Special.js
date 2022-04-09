import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h5>{ring}</h5>
            <h5>Special</h5>
        </div>
    );
};

export default Special;