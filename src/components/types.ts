export interface ProductModel {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  images: string;
  description: string;
  category: string;
  rating?: ProductRating;
  brand: string;
}

export interface ProductRating {
  count: number;
  rate: number;
}

export interface cartItem extends ProductModel {
  cartQuantity: number;
  thumbnail: string;
}

export interface wishlistItem extends ProductModel {
  wishlistQuantity: number;
}
export interface WishlistState {
  cartItems: [CartState];
  wishlistItems: wishlistItem[];
  wishlistTotalQuantity: number;
  wishlistTotalAmount: number;
}

export const initialWishlistState: WishlistState = {
  wishlistItems: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems")!)
    : [],
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")!)
    : [],
  wishlistTotalQuantity: 0,
  wishlistTotalAmount: 0,
};

export interface CartState {
  cartItems: cartItem[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

export const initialCartState: CartState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")!)
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export interface User {
  "iss": string,
  "nbf": number,
  "aud": string,
  "sub": number,
  "email": string,
  "email_verified": boolean,
  "azp": string,
  "name": string,
  "picture": string,
  "given_name": string,
  "family_name": string,
  "iat": number,
  "exp": number,
  "jti": string
}

export interface GoogleCallbackResponse{
  "clientId":string,
  "client_id": string,
  "credential": string,
  "select_by": string
}