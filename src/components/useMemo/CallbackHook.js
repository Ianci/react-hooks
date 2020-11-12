import React from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

    const [ counter, setCounter ] = React.useState(10)

    

    const increment = React.useCallback(
        () => {
            setCounter ( counter + 1)
        },
        [setCounter, counter],
    )

    return (
        <div>
         <h1>useCallback: {counter} </h1>   
         <ShowIncrement increment={increment}/>
        </div>
    )
}
