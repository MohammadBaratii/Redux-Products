import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const url = "https://course-api.com/react-useReducer-cart-project";

export const fetchProducts = createAsyncThunk(
  "cart/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("There is some error");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
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
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.isLoading = false;
      alert(action.payload);
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
