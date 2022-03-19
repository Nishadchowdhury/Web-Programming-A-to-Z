import React, { useState } from 'react';

const Test = ({count: countF}) => {
    const [count , setCount] = useState(0);
    return (
        <div>
        <div className='Count mt-5'> 
        <h1>{count}</h1>
        <button className='ms-3 p-3' onClick={() =>{setCount( count + 1)}}>Plus </button>
        <button className='ms-3 p-3' onClick={() =>{setCount(count - 1)}}>Minus </button>
             </div>
        </div>
    );
};

export default Test;