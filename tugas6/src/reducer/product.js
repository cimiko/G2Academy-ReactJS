import { FETCH_PRODUCT, ADD_PRODUCT, FETCH_PRODUCT_SUCCESS } from 'action/constans'

const initialState = {
    isLoading: true,
    product: []
}

const product = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                product: action.payload
            }
        case ADD_PRODUCT:
            return {
                ...state,
                isLoading: false,
                product: [...state.product, action.payload]
            }
        default:
            return state
    }
}

export default product