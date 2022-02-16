import { combineReducers } from "redux";
import products from './products'
import carts from './carts'
import message from './message'

var appReducer = combineReducers({
    products,
    carts,
    message
})

export default appReducer