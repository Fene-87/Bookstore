import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.categories = 'Under construction';
      alert(state.categories);
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
