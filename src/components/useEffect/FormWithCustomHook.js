import React from 'react';
import useForm from '../../hooks/useForm'
const Form = () => {
    const [ values, handleInputChange ] = useForm({
        name: '', email: '', password: ''
    })

    const { name, email, password } = values

    return ( 
        <>
        <h1>Formulario w/ Custom Hook</h1>
        <form>
            <input type="text" placeholder="Ingrese su nombre" name="name" value={name} onChange={handleInputChange}/>
            <input  type="email" placeholder="Ingrese su email" name="email" value={email} onChange={handleInputChange}/>
            <input  type="password" placeholder="Ingrese su contraseña" name="password"value={password} onChange={handleInputChange}/>
        </form>
        </>
     );
}
 
export default Form;