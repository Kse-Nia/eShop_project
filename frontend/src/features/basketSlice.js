import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

const basketSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetData: (state) => {
      state.data = [];
    },
    // Ajout produit au panier
    addToBasket(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
        console.log("quantité augmentée");
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);
        console.log("produit ajouté");
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    // Réduire quantité
    decreaseBasket(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        console.log("quantité réduite");
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
        console.log("produit sup");
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    // Supprimer du panier
    removeFromBasket(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );
          state.cartItems = nextCartItems;
          console.log("error");
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    // Total panier

    // Supprimer totalement panier
    clearBasket(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      console.log("panier supprimé");
    },
  },
});

export const { addToBasket, decreaseBasket, removeFromBasket, clearBasket } =
  basketSlice.actions;

export default basketSlice.reducer;
