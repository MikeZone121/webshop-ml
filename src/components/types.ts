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
    name: string,
    cartQuantity: number,
    product: ProductModel,
}

export interface ProductRating{
    count:number,
    rate:number,
}


export interface Product {
    id: number;
    name: string;
    title: string,
    price: number;
    cartQuantity: number;
    product: Product;
}

export interface CartState {
    cartItems: Product[];
    cartTotalQuantity: number;
    cartTotalAmount: number;
}

export const initialState: CartState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')!) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}