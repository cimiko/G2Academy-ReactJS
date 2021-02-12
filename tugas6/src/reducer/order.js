import { ADD_ORDER, PLUS_PRODUCT, MIN_PRODUCT, DELETE_ORDER } from 'action/constans'

const initialState = []

const order = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            return [...state, action.payload]
        case PLUS_PRODUCT:
            const plusOrder = [...state]
            plusOrder[action.payload].counter += 1
            plusOrder[action.payload].totalPrice = plusOrder[action.payload].counter * plusOrder[action.payload].price
            return plusOrder
        case MIN_PRODUCT:
            if(state[action.payload].counter === 1){
                return state
            }else{
                const minOrder = [...state]
                minOrder[action.payload].counter -= 1
                minOrder[action.payload].totalPrice = minOrder[action.payload].counter * minOrder[action.payload].price
                return minOrder
            }
        case DELETE_ORDER:
            const filter = state.filter(item => item.id !== state[action.payload].id)
            const del = [...filter]
            return del
        default:
            return state
    }
}

export default order