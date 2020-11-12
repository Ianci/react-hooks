import React from 'react'

export const Small = React.memo((props) => {
    return (
        <small>
            {props.counter}
        </small>
    )
}
)