import { ADD_TODO, UPDATE_TODO, DELETE_TODO, FILTER_TODO } from 'action/contants'

export const addtodo = payload => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const updateTodo = payload => {
    return {
        type: UPDATE_TODO,
        payload
    }
}

export const deleteTodo = payload => {
    return {
        type: DELETE_TODO,
        payload
    }
}

export const filterTodo = payload => {
    return {
        type: FILTER_TODO,
        payload
    }
}