import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {toast} from "react-toastify";
import {Product, initialState } from "../components/types";

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>){
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity++;
                toast.info(`Increased ${state.cartItems[itemIndex].title} cart quantity`), {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                };
            }else{
                const tempProduct = {...action.payload, cartQuantity: 1};
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.title} added to cart`), {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                };
                }
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            },
        }
    });

export const { addToCart } = CartSlice.actions;

export default CartSlice.reducer;