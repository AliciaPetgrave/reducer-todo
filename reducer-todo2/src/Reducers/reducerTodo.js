import React from 'react'

export const initialState = {
    item: '',
    completed: false,
    id: Date.now()
  }

export const reducerTodo = (state, action) => {
    switch(action.type){
        
        default: return state;     
    }
}