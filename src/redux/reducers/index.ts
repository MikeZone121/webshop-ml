import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';
import cartReducer from "../CartSlice"

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cart: cartReducer,

})

export default reducers;