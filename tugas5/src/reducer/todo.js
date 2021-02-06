import { ADD_TODO, UPDATE_TODO, DELETE_TODO, FILTER_TODO } from 'action/contants'

const initialState = []

const todoFunc = (currState = initialState, action) => {
    switch (action.type){
        case ADD_TODO:
            return [...currState, action.payload]
        case UPDATE_TODO:
            return [...currState, action.payload]
        case DELETE_TODO:
            return [...currState, action.payload]
        case FILTER_TODO:
            return [...currState, action.payload]
        default:
            return currState
    }
}

export default todoFunc