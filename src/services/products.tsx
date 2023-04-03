import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductModel } from "../components/types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<any, void>({
      query: () => ({ url: "products" }),
    }),
    getProduct: builder.query<ProductModel, any>({
      query: (id) => ({ url: `products/${id}` }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = productsApi;
