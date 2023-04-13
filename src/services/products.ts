import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductModel } from "../components/types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductModel, void>({
      query: () => "products",
    }),
    getProduct: builder.query<ProductModel, void>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = productsApi;
