import { ADD_ORDER } from './constans'

export const addOrder = payload => {
    return{
        type: ADD_ORDER,
        payload
    }
}