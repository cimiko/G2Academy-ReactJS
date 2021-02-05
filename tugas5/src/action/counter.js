import { INCREMENT, DECREMENT } from 'action/contants'

export const increment = _ => {
    return{
        type: INCREMENT
    }
}

export const decrement = _ => {
    return{
        type: DECREMENT
    }
}