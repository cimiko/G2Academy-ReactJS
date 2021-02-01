import { INCREMENT, DECREMENT } from './constant'

export const increment = (payload) => {
    return {
        type: INCREMENT,
        payload // atau payload: payload
    }
}

export const decrement = (payload) => {
    return{
        type: DECREMENT,
        payload
    }
}