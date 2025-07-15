import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchUserBooks, deleteUserBook } from "./operations";

export type Book = {
  _id: string;
  imageUrl: string;
  title: string;
  author: string;
  totalPages: number;
};

type BooksState = {
  myBooks: Book[];
  isLoading: boolean;
  error: string | null;
};

const initialState: BooksState = {
  myBooks: [],
  isLoading: false,
  error: null,
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
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchUserBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.myBooks = action.payload;
      })
      .addCase(fetchUserBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Error";
      })

      .addCase(deleteUserBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        deleteUserBook.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.myBooks = state.myBooks.filter(
            (book) => book._id !== action.payload
          );
        }
      )
      .addCase(deleteUserBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Failed to delete book";
      }),
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
