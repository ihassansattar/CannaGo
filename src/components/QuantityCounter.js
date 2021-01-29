import React, { useState } from 'react'

const QuantityCounter = () => {
    const [count,setCount] = useState(1);
    const decrease = () =>{
        if(count>0)
        setCount(count-1);
    }
    const increase = () =>{
        setCount(count+1);
    }
    return (
        <div className="counter-container">
            <button onClick={decrease}>-</button>
            <p>{count}</p>
            <button onClick={increase}>+</button>
        </div>
    )
}
export default QuantityCounter;