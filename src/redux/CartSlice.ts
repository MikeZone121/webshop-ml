import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {toast} from "react-toastify";
import {ProductModel, initialState } from "../components/types";
import { toastConfig } from "../config/toast";

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<ProductModel>){
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity++;
                toast.info(`Increased ${state.cartItems[itemIndex].title} cart quantity`, toastConfig);
            }else{
                const tempProduct = {...action.payload, cartQuantity: 1};
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.title} added to cart`, toastConfig);
                }
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            },
        }
    });

export const { addToCart } = CartSlice.actions;

export default CartSlice.reducer;