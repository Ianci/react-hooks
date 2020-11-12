import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CallbackHook } from './components/useMemo/CallbackHook'
import { ToDoReducer } from './components/useReducer/TodoApp';


ReactDOM.render(
  <React.StrictMode>
    <ToDoReducer/>
  </React.StrictMode>,
  document.getElementById('root')
);

