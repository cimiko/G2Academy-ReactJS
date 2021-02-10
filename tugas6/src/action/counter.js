import { INCREMENT, DECREMENT } from './constans'

export const increment = _ => {
    return {
        type: INCREMENT
    }
}

export const decrement = _ => {
    return {
        type: DECREMENT
    }
}