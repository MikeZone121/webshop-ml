import { configureStore } from '@reduxjs/toolkit'
import { getTotals } from './CartSlice'
import rootReducer from './reducers'

const store = configureStore({ reducer: rootReducer })
store.dispatch(getTotals());
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch