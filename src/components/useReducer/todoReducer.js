export const toDoReducer = (state = [], action) =>{
    const { payload, type } = action
    switch(type){
        case 'ADD': 
            return [...state, payload];
        case 'DELETE':
            return state.filter(todo => todo.id !== payload);
       case 'TOGGLE':
            return state.map(toDo => {
                if (toDo.id === payload){
                    return{
                        ...toDo,
                        done: !toDo.done
                    } 
                } else {
                    return toDo;
                }
            })
        default:
            return state
    };
}