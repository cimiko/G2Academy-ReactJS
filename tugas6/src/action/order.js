import { ADD_ORDER, PLUS_PRODUCT, MIN_PRODUCT, DELETE_ORDER } from './constans'

export const addOrder = payload => {
    return{
        type: ADD_ORDER,
        payload
    }
}

export const plusProduct = payload => {
    return{
        type: PLUS_PRODUCT,
        payload
    }
}

export const minProduct = payload => {
    return{
        type: MIN_PRODUCT,
        payload
    }
}

export const deleteOrder = payload => {
    return{
        type: DELETE_ORDER,
        payload
    }
}