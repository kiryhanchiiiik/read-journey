import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

export interface User {
  name: string | null;
  email: string | null;
}

export interface AuthState {
  user: User;
  isLoading: boolean;
  error: string | null;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

const INITIAL_STATE: AuthState = {
  user: {
    name: null,
    email: null,
  },
  isLoading: false,
  error: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const safeUser = (user: User | undefined | null): User => ({
  name: user?.name ?? null,
  email: user?.email ?? null,
});

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<{ user: User; token: string }>) => {
          state.isLoading = false;
          state.isLoggedIn = true;
          state.token = action.payload.token;
          state.user = action.payload.user;
        }
      )
      .addCase(register.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<{ user: User; token: string }>) => {
          state.isLoading = false;
          state.isLoggedIn = true;
          state.token = action.payload.token;
          state.user = safeUser(action.payload.user);
        }
      )
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = safeUser(action.payload);
      })
      .addCase(refreshUser.rejected, (state, action: PayloadAction<any>) => {
        state.isRefreshing = false;
        state.token = null;
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
        state.error = action.payload;
      })

      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(logout.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
