import React, { useReducer, useState } from 'react'
import { toDoReducer } from '../useReducer/todoReducer'
import { Container, Title, DivGrid, ButtonsDiv } from './Style'
import './doneIt.css'

const init = () => {
    return JSON.parse(localStorage.getItem('toDos')) || [];
}

export const ToDoReducer = () => {
    const [state, dispatch] = useReducer(toDoReducer, [], init)
    
    const [value, setValue] = useState("")

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    
    React.useEffect(() => {
       localStorage.setItem('toDos', JSON.stringify(state))
    }, [state])

    //Submit y creacion de la tarea
    const handleSubmit = e => {
        e.preventDefault()

        if(value.trim() === "") return 

        const newTodo = {
            id: new Date().getTime(),
            desc: value,
            done: false,
        }
        const actionNewTodo = {
            type: 'ADD',
            payload: newTodo
        }
        dispatch( actionNewTodo )
        setValue('')
    }

    //handleDelete
    const handleDelete = (id) => {
       
        const actionDelete = {
            type: 'DELETE',
            payload: id
        }
        dispatch( actionDelete )
    }

    const handleToggle = id => {
        dispatch({
            type: 'TOGGLE',
            payload: id
        })
    }
    return (
        <Container>
             <Title>Reducer example <small>{state.length}</small></Title>
            <DivGrid>
           
            <ul>
                {state.map((todo, i) => (
                    <>
                    
                    <li key={todo.id} style={{display: "inline-flex"}}>
                       <span className={ todo.done && 'doneIt'}
                       onClick={() => handleToggle(todo.id)}>{i + 1} . {todo.desc}</span>
                    </li>
                    <ButtonsDiv>
                    <button type="button" style={{margin: "5px"}} onClick={() => handleDelete(todo.id)}>Borrar</button>
                    <button type="button" style={{margin: "5px"}}>Editar</button>
                    </ButtonsDiv>
                    </>
                ))}
                
            </ul>
            
            <form onSubmit={handleSubmit}>
                <h3>Agregar tarea</h3>
                <input type="text" name="todo" onChange={handleChange} value={value}/>
                <button type="submit">Agregar</button>
            </form>
                
            
            </DivGrid>
            
        </Container>
    )
}
