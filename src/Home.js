import React from 'react';
import CounterApp from './components/useState/CounterApp'
import Form from './components/useEffect/FormWithCustomHook'
const Home = () => {
    return ( 
        <>
        <h1>From home</h1>
        <CounterApp />
        <Form />
        </>
     );
}
 
export default Home;