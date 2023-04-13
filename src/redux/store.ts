import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { productsApi } from "../services/products";
import { getTotals } from "./CartSlice";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(getTotals());
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// TODO: rm root - / combine reducer
// example:
// import { configureStore } from '@reduxjs/toolkit'
// import { api } from './services/auth'
// import authReducer from '../features/auth/authSlice'

// export const store = configureStore({
//   reducer: {
//     [api.reducerPath]: api.reducer,
//     auth: authReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware),
// })

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
