import { ADD_TODO } from 'action/contants'

export const addtodo = payload => {
    return {
        type: ADD_TODO,
        payload
    }
}