export interface ProductModel{
    id:number,
    title:string,
    price:number,
    thumbnail:string,
    images:string,
    description:string,
    category:string,
    rating?:ProductRating
}

export interface ProductRating{
    count:number,
    rate:number,
}
