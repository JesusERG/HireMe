import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import { githubApi } from './slices/apis/githubApiSlice';
import { wordleApi } from './slices/apis/wordleApiSlice';
import { ecommerceApi } from './slices/apis/ecommerceApiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [githubApi.reducerPath]: githubApi.reducer,
    [wordleApi.reducerPath]: wordleApi.reducer,
    [ecommerceApi.reducerPath]: ecommerceApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      githubApi.middleware,
      wordleApi.middleware,
      ecommerceApi.middleware,
    ),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
