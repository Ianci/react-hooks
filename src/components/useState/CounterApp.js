import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter'
const CounterApp = () => {
    
    const { handleReset, handleAdd, handleRest, counter } = useCounter(0)
    return (
        <> 
        <h1> Counter: {counter} </h1>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleRest}> -1</button>
        <button onClick={handleReset}>Reset</button>
        </>
     );
     
}
 
export default CounterApp;