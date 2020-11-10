import React, { useState } from 'react';
export const useCounter = (count) => {
    const [ counter, setCounter] = useState(count)
    const handleAdd = () => {
        setCounter(counter + 1)
    }
    const handleRest = () => {
        if(counter <= 0) return
        setCounter(counter - 1)
    }
    const handleReset = () => {
        setCounter(0)
    }
    return {
        handleReset, handleAdd, handleRest, counter
    }
}