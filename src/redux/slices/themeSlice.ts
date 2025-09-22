import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
  theme: 'light' | 'dark';
}

const initialState: ThemeState = {
  theme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: state => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
