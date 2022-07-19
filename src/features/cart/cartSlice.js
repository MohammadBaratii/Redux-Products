import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: data,
    amount: 0,
    total: 0,
    isLoading: true,
  },
  reducers: {
    clearCart: (state) => {
      state.products = [];
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    increaseProduct: (state, action) => {
      const selectedProduct = state.products.find(
        (product) => product.id === action.payload
      );
      selectedProduct.amount++;
    },
    decreaseProduct: (state, action) => {
      const selectedProduct = state.products.find(
        (product) => product.id === action.payload
      );
      selectedProduct.amount--;
      state.products = state.products.filter((product) => product.amount > 0);
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.products.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total.toFixed(2);
    },
  },
});

export const {
  clearCart,
  removeProduct,
  increaseProduct,
  decreaseProduct,
  calculateTotals,
  openModal,
  closeModal,
} = cartSlice.actions;
export default cartSlice.reducer;
