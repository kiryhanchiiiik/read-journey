import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Book = {
  _id: string;
  imageUrl: string;
  title: string;
  author: string;
  totalPages: number;
};

type BooksState = {
  myBooks: Book[];
};

const initialState: BooksState = {
  myBooks: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<Book>) {
      const exists = state.myBooks.some((b) => b._id === action.payload._id);
      if (!exists) {
        state.myBooks.push(action.payload);
      }
    },
    deleteBook(state, action: PayloadAction<string>) {
      state.myBooks = state.myBooks.filter(
        (book) => book._id !== action.payload
      );
    },
  },
});

export const { addBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
