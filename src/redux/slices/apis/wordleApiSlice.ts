import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//https://api.frontendexpert.io/api/fe/wordle-words

// Define a service using a base URL and expected endpoints
export const wordleApi = createApi({
  reducerPath: 'wordleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.frontendexpert.io/api/',
  }),
  endpoints: build => ({
    getFiveLetterWords: build.query<string[], void>({
      query: () => 'fe/wordle-words',
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFiveLetterWordsQuery } = wordleApi;
