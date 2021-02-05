import { ADD_TODO } from 'action/contants'

const initialState = []

const todoFunc = (currState = initialState, action) => {
    switch (action.type){
        case ADD_TODO:
            return [...currState, action.payload]
        default:
            return currState
    }
}

export default todoFunc