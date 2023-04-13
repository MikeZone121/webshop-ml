// TODO: can be just a .ts file

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// TODO: types near services, component types near the component
import { ProductModel } from "../components/types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    // TODO: remove any
    // TODO: url prop can be just a string
    getAllProducts: builder.query<any, void>({
      query: () => "products",
    }),
    // TODO: remove any
    getProduct: builder.query<ProductModel, any>({
      query: (id) => ({ url: `products/${id}` }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = productsApi;
