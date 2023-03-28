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

            RemoveFromCart(state, action){
                const nextCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
                state.cartItems = nextCartItems
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
                toast.error(`${action.payload.title} removed from cart`, toastConfig);
            },
            decreaseCart(state, action){
                const itemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id);

                if(state.cartItems[itemIndex].cartQuantity > 1){
                    state.cartItems[itemIndex].cartQuantity -= 1;
                    toast.info(`${action.payload.title} cart quantity decreased`, toastConfig);
                }else if (state.cartItems[itemIndex].cartQuantity === 1){
                    const nextCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
                    state.cartItems = nextCartItems
                    toast.error(`${action.payload.title} removed from cart`, toastConfig);
                }
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            },
            clearCart(state){
                state.cartItems = [];
                toast.success(`Cart cleared`, toastConfig);
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            },
            getTotals(state){
                let {total, quantity} = state.cartItems.reduce((cartTotal,cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;
                return cartTotal;
            }, {total: 0, quantity: 0})
            state.cartTotalAmount = total;
            state.cartTotalQuantity = quantity;
        },
    },
    });

export const { addToCart, RemoveFromCart, decreaseCart, clearCart, getTotals } = CartSlice.actions;

export default CartSlice.reducer;