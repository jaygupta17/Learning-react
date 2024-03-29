import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos : [{id:1 , text:"hello world"}], //initial state of todo list
}

export const todoSlice = createSlice({
    name:'todo' , //prebuilt property
    initialState, //referring to initial state object
    reducers:{
        //contains properties and functions
        //state and action is predefined :
        //state: refers to current state
        //action: values
        addTodo : (state, action)=>{
            const todo = {
                id: nanoid(),
                text : action.payload, // action > payload i.e object > 'text' i.e property name
            }
            if (todo.text==='') {
                alert('enter something')
            } else {
                state.todos.push(todo)
            }  // get 'todos' array from state and push 'todo' to it
        },
        removeTodo : (state , action)=>{
            state.todos = state.todos.filter((todo)=> todo.id!==action.payload)
        },
    },
})

export const {addTodo , removeTodo} = todoSlice.actions //exporting individual functions 
export default todoSlice.reducer //for importing in store to make it aware of all the reducers [else it will not know]