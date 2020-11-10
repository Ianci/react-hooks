import React, { useState } from 'react';

const useForm =() => {
    const [ values, setValues ] = useState({
        name: "", email: "", password: ""
    })

    
    return {
        values
    }
}

export default useForm;