import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserActivity } from '../../../utils/types/Types';

//https://api.github.com/users/JesusERG/events/public

// Define a service using a base URL and expected endpoints
export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: build => ({
    getUserActivity: build.query<UserActivity[], void>({
      query: () => 'users/JesusERG/events/public',
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserActivityQuery } = githubApi;
