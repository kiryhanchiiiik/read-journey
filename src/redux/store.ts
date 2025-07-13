import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import filterReducer from "./filters/slice";
import bookReducer from "./books/slice";
import { useDispatch } from "react-redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import type { Reducer } from "@reduxjs/toolkit";

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "user"],
};

const persistedAuthReducer = persistReducer(authConfig, authReducer) as Reducer;

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    filters: filterReducer,
    books: bookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const persistor = persistStore(store);
