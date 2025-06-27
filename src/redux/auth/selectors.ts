import type { RootState } from "../store";
import type { User } from "./operations";

export const selectUser = (state: RootState): User => state.auth.user;

export const selectUserIsLoading = (state: RootState): boolean =>
  state.auth.isLoading;

export const selectUserError = (state: RootState): string | null =>
  state.auth.error;

export const selectUserIsLoggedIn = (state: RootState): boolean =>
  state.auth.isLoggedIn;

export const selectUserIsRefreshing = (state: RootState): boolean =>
  state.auth.isRefreshing;
