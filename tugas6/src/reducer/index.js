import { combineReducers } from 'redux'
import product from './product'
import counter from './counter'


const reducer = combineReducers({
    product,
    counter
})

export default reducer