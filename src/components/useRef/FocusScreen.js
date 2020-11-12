import React, { useRef } from 'react'

export const FocusScreen = () => {

    const ref = useRef()
    console.log(ref)
    const handleClick= () => {
        ref.current.select()
    }
    return (
        <div>
            <h1>Focus Screen</h1>
            <input placeholder="Su nombre"
            
            ref={ref}/>
            <button type="button"
            onClick={handleClick}>Focus</button>
        </div>
    )
}
