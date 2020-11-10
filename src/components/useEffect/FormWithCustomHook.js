import React from 'react';

const Form = () => {
    
    return ( 
        <>
        <h1>Formulario w/ Custom Hook</h1>
        <form>
            <input type="text" placeholder="Ingrese su nombre" name="name"/>
            <input  type="email" placeholder="Ingrese su email" name="email"/>
            <input  type="password" placeholder="Ingrese su contraseña" name="password"/>
        </form>
        </>
     );
}
 
export default Form;