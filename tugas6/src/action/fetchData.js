import { FETCH_PRODUCT, ADD_PRODUCT, FETCH_PRODUCT_SUCCESS} from './constans'

const fetchProductRequest = _ => ({
    type: FETCH_PRODUCT
})

const fetchProductSuccess = payload => ({
    type: FETCH_PRODUCT_SUCCESS,
    payload
})

export const fetchProduct = () => dispatch => {
    dispatch(fetchProductRequest())
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => dispatch(fetchProductSuccess(json),console.log(json)))
}

export const addProduct = payload => {
    return {
        type: ADD_PRODUCT,
        payload
    }
}