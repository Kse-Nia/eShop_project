import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import basketReducer from "../features/basketSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: basketReducer,
  },
});
