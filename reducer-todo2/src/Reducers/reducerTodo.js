import React from 'react';

export const initialState = {
    item: '',
    completed: false,
    id: Date.now()
  }

export const reducerTodo = (state, action) => {
    switch(action.type){
        case "ADD_TODO":
            return {
                    ...state,
                    item: action.item,
                    completed: false,
                    id: action.id
                }
        case "TOGGLE_COMPLETED":
            return {
                ...state,
                completed: !state.completed
            }  
        case "CLEAR":
            return state.filter(task => !task.completed);
        default: return state     
    }
}