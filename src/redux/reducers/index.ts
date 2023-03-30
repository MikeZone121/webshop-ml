import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';
import cartReducer from "../CartSlice"
import { productsApi } from '../../services/products';

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
})

export default reducers;