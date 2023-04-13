import { combineReducers } from "redux";
// import { productReducer, selectedProductReducer } from "./productReducer";
import cartReducer from "../CartSlice";
import { productsApi } from "../../services/products";
import WishlistSlice from "../WishlistSlice";

// TODO: rename reducers
const reducers = combineReducers({
  // product: selectedProductReducer,
  cart: cartReducer,
  wishlist: WishlistSlice,
  [productsApi.reducerPath]: productsApi.reducer,
});

export default reducers;
