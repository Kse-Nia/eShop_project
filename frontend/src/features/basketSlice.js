import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    getTotal: (state) => {
      let { totalPrice, totalQuantity } = state.cart.reduce(
        (totalBasket, itemBasket) => {
          console.log("totalBasket", totalBasket);
          console.log("itemBasket", itemBasket);
          const { price, quantity } = itemBasket;
          console.log(price, quantity);
          const itemTotal = price * quantity;
          totalBasket.totalPrice += itemTotal;
          totalBasket.totalQuantity += quantity;
          return totalBasket;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      state.basket = state.basket.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.basket = state.basket.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
  },
});

export const {
  addToBasket,
  getTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
