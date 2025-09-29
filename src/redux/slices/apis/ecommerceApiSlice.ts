import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//https://dummyjson.com/products

// Define a service using a base URL and expected endpoints
export const ecommerceApi = createApi({
  reducerPath: 'ecommerceApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: build => ({
    getProducts: build.query<any, void>({
      query: () => 'products',
    }),
    getCategories: build.query<any, void>({
      query: () => 'products/categories',
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery, useGetCategoriesQuery } = ecommerceApi;
