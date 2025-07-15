import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";
import type { Book } from "./slice";

export const fetchUserBooks = createAsyncThunk<
  Book[],
  void,
  { rejectValue: string }
>("books/fetchUserBooks", async (_, thunkApi) => {
  try {
    const response = await axiosInstance.get("/books/own");
    return response.data;
  } catch (e: any) {
    return thunkApi.rejectWithValue(e.message);
  }
});

export const deleteUserBook = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("books/deleteUserBook", async (id, thunkApi) => {
  try {
    await axiosInstance.delete(`/books/remove/${id}`);
    return id;
  } catch (e: any) {
    return thunkApi.rejectWithValue(e.message);
  }
});
