import { combineReducers } from 'redux'
import product from './product'
import counter from './counter'
import order from './order'


const reducer = combineReducers({
    product,
    counter,
    order
})

export default reducer