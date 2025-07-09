import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  title: string;
  author: string;
}

const initialState: FiltersState = {
  title: "",
  author: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setAuthor(state, action: PayloadAction<string>) {
      state.author = action.payload;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { setTitle, setAuthor, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
