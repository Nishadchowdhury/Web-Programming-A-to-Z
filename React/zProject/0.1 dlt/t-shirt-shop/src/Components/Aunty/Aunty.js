import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = ({house}) => {
    const ring = useContext(RingContext);
    return (
        <div>
            <p>{house}</p>
            <p>{ring}</p>
            <h1>anti</h1>
        </div>
    );
};

export default Aunty;