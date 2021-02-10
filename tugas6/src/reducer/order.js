import { ADD_ORDER } from 'action/constans'

const initialState = []

const addProduct = (state = initialState, action) => {
    switch (action.type){
        case ADD_ORDER:
            return [...state, action.payload]
        default:
            return state
    }
}