import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartQuantity: 0,
  cartTotal: 0,
};

export const userBasket = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.basket = [...state.basket, action.payload];
    },
    removeFromBasket: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          added: false,
        };
      });
    },
  },
});
