import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './features/books/booksSlice';
import categoriesSlice from './features/categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksSlice,
    categories: categoriesSlice,
  },
});

export default store;
