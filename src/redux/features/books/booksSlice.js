import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
  createdStatus: '',
  deleteStatus: '',
};

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1yepAggSrySn7jXtDr4G/books/';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const postBooks = createAsyncThunk('books/postBooks', async (initialBooks) => {
  try {
    const response = await axios.post(baseUrl, initialBooks);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const deleteBooks = createAsyncThunk('books/deleteBooks', async (bookId) => {
  try {
    const response = await axios.delete(baseUrl + bookId);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchBooks.fulfilled, (state, { payload }) => {
        const keys = Object.keys(payload);
        const tempArray = [];
        keys.forEach((key) => {
          tempArray.push(Object.assign({ id: key }, ...payload[key]));
        });
        state.books = [...tempArray];
        state.status = 'loaded';
      })
      .addCase(fetchBooks.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }))
      .addCase(postBooks.fulfilled, (state, { payload }) => ({
        ...state,
        status: 'succeeded',
        createdStatus: payload,
      }))
      .addCase(deleteBooks.fulfilled, (state, { payload }) => ({
        ...state,
        status: 'succeeded',
        createdStatus: payload,
      }));
  },
});

export default booksSlice.reducer;
