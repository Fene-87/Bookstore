import { createSlice } from '@reduxjs/toolkit';
import bookItems from '../../../bookItems';

const initialState = {
  books: bookItems,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push(payload);
    },
    removeBook: (state, { payload }) => {
      return {
        ...state,
        books: state.books.filter((item) => item.itemId !== payload),
      };
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
