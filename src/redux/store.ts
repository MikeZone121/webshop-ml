import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../services/products";
import cartReducer from "./CartSlice";
import wishlistReducer from "./WishlistSlice";

const store = configureStore({
  reducer: {
    cartReducer,
    wishlistReducer,
    [productsApi.reducerPath]: productsApi.reducer,
     },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;