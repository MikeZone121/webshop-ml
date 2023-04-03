import { configureStore } from '@reduxjs/toolkit'
import { getTotals } from './CartSlice'
import rootReducer from './reducers'
import { productsApi } from '../services/products';

 const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware),
  })


store.dispatch(getTotals());
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch