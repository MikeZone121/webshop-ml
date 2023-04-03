export interface ProductModel{
    id:number,
    title:string,
    price:number,
    thumbnail:string,
    images:string,
    description:string,
    category:string,
    rating?:ProductRating,
    brand:string,
}

export interface ProductRating{
    count:number,
    rate:number,
}


export interface cartItem extends ProductModel{
    cartQuantity: number;
    thumbnail:string,
}

export interface wishlistItem extends ProductModel{
    wishlistQuantity: number;
}
export interface WishlistState {
    wishlistItems: wishlistItem[];
    wishlistTotalQuantity: number;
    wishlistTotalAmount: number;
}

export const initialWishlistState: WishlistState = {
    wishlistItems: localStorage.getItem('wishlistItems') ? JSON.parse(localStorage.getItem('wishlistItems')!) : [],
    wishlistTotalQuantity: 0,
    wishlistTotalAmount: 0,
}

export interface CartState {
    cartItems: cartItem[];
    cartTotalQuantity: number;
    cartTotalAmount: number;
}

export const initialState: CartState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')!) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}