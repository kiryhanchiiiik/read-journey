import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export type User = {
  name: string | null;
  email: string | null;
};

interface AuthResponse {
  user: User;
  token: string;
}

interface LoginFormData {
  email: string;
  password: string;
}

interface RegisterFormData extends LoginFormData {
  name: string;
}

interface RootState {
  auth: {
    token: string | null;
  };
}

export const authInstance = axios.create({
  baseURL: "https://readjourney.b.goit.study/api",
});

export const setToken = (token: string) => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  authInstance.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk<
  AuthResponse,
  RegisterFormData,
  { rejectValue: string }
>("auth/register", async (formData, thunkApi) => {
  try {
    const { data } = await authInstance.post("/users/signup", formData);
    setToken(data.token);
    return data;
  } catch (e: any) {
    return thunkApi.rejectWithValue(e.message);
  }
});

export const login = createAsyncThunk<
  AuthResponse,
  LoginFormData,
  { rejectValue: string }
>("auth/login", async (formData, thunkApi) => {
  try {
    const { data } = await authInstance.post("/users/signin", formData);

    setToken(data.token);

    return {
      user: {
        name: data.name,
        email: data.email,
      },
      token: data.token,
    };
  } catch (e: any) {
    if (e.response?.status === 400) {
      toast.error("No such user found or incorrect credentials.");
    }
    return thunkApi.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk<
  User,
  void,
  { state: RootState; rejectValue: string }
>("auth/refresh", async (_, thunkApi) => {
  const state = thunkApi.getState();
  const token = state.auth.token;

  if (!token) {
    return thunkApi.rejectWithValue("No valid token");
  }

  try {
    setToken(token);
    const { data } = await authInstance.get("/users/current");
    return data.user;
  } catch (e: any) {
    return thunkApi.rejectWithValue(e.message);
  }
});

export const logout = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await authInstance.post("/users/signout");
      clearToken();
    } catch (e: any) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
