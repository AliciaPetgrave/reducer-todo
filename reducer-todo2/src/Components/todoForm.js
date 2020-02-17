import React, {useState, useReducer} from 'react'
import {initialState, reducerTodo} from '../Reducers/reducerTodo'


const TodoForm = () => {
    const [state, dispatch] = useReducer(reducerTodo, initialState)
    const [newTodo, setNewTodo] = useState("")

    const handleChanges = e => {
        setNewTodo(e.target.value)
    }


        return (
            <div>
                <form>
                    <input
                    type="text"
                    placeholder="Add Todo"
                    value={newTodo}
                    onChange={handleChanges}></input>

                    <button
                    type="submit"
                    onClick={() => dispatch({type: 'ADD_TODO'})}>Add</button>

                    <button
                    type="submit"
                    onClick={() => dispatch({type: "CLEAR"})}>Clear Completed</button>
                </form>
            </div>
        )
    
}

export default TodoForm