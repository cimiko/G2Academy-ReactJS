import { INCREMENT, DECREMENT } from './constans'

export const increment = payload => {
    return {
        type: INCREMENT,
        payload
    }
}

export const decrement = payload => {
    return {
        type: DECREMENT,
        payload
    }
}