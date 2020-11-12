import React from 'react'

export const ShowIncrement = (props) => {

    console.log('Me volvi a renderizar y eso no está bien')


    return (
        <button
        onClick={ ()=> props.increment()}>
            Incrementar
        </button>
    )
}
