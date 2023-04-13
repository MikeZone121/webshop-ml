import { combineReducers } from "redux";
import cartReducer from "../CartSlice";
import { productsApi } from "../../services/products";
import WishlistSlice from "../WishlistSlice";

const reducers = combineReducers({
  cart: cartReducer,
  wishlist: WishlistSlice,
  [productsApi.reducerPath]: productsApi.reducer,
});

export default reducers;
