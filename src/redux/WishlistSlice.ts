import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ProductModel, initialWishlistState } from "../components/types";
import { toastConfig } from "../config/toast";

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialWishlistState,
  reducers: {
    addToWishlist(state, action: PayloadAction<ProductModel>) {
      const itemIndex = state.wishlistItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        const nextwishlistItems = state.wishlistItems.filter(
          (wishlistItem) => wishlistItem.id !== action.payload.id
        );
        state.wishlistItems = nextwishlistItems;
        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(state.wishlistItems)
        );
        toast.error(
          `${action.payload.title} removed from wishlist`,
          toastConfig
        );
      } else {
        const tempProduct = { ...action.payload, wishlistQuantity: 1 };
        state.wishlistItems.push(tempProduct);
        toast.success(`${action.payload.title} added to wishlist`, toastConfig);
      }
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.wishlistItems)
      );
    },

    RemoveFromWishlist(state, action) {
      const nextwishlistItems = state.wishlistItems.filter(
        (wishlistItem) => wishlistItem.id !== action.payload.id
      );
      state.wishlistItems = nextwishlistItems;
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.wishlistItems)
      );
      toast.success(`${action.payload.title} removed from wishlist`, toastConfig);
    },

    RemoveFromWishlistAfterAddToCart(state, action) {
      const nextwishlistItems = state.wishlistItems.filter(
        (wishlistItem) => wishlistItem.id !== action.payload.id
      );
      state.wishlistItems = nextwishlistItems;
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.wishlistItems)
      );
    },

    clearWishlist(state) {
      state.wishlistItems = [];
      toast.success(`wishlist cleared`, toastConfig);
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.wishlistItems)
      );
    },
    getTotals(state) {
      let { total, quantity } = state.wishlistItems.reduce(
        (wishlistTotal, wishlistItem) => {
          const { price, wishlistQuantity } = wishlistItem;
          const itemTotal = price * wishlistQuantity;
          wishlistTotal.total += itemTotal;
          wishlistTotal.quantity += wishlistQuantity;
          return wishlistTotal;
        },
        { total: 0, quantity: 0 }
      );
      state.wishlistTotalAmount = total;
      state.wishlistTotalQuantity = quantity;
    },
  },
});

export const { addToWishlist, RemoveFromWishlist, clearWishlist, getTotals, RemoveFromWishlistAfterAddToCart } =
  WishlistSlice.actions;

export default WishlistSlice.reducer;
