import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register a new account
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login an existing account
export const login = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerSuccess: (state, action) => {
      state.user = action.payload.user;
      state.isError = false;
      state.isSuccess = true;
      state.isLoading = false;
      state.message = action.payload.message;
    },
    registerFailure: (state, action) => {
      state.user = null;
      state.isError = true;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = action.payload;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.isError = false;
      state.isSuccess = true;
      state.isLoading = false;
      state.message = action.payload.message;
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.isError = true;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = action.payload;
    },
  },
  extraReducers: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
