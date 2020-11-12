import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'
    export const Memorize = () => {
        const [ show, setShow ] = useState(true)
        const { handleReset, handleAdd, handleRest, counter } = useCounter(100)

        return (
            <div>
                <h1>Memorize</h1>
                <h1>Counter: <Small counter={counter}/></h1>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleAdd}>Increment</button>
                <button onClick={handleRest}>Decrement</button>
                
                <button onClick={()=> setShow(!show)}>Show/Hide {JSON.stringify( show ) }</button>
            </div>
        )
    }
