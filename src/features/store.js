import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import modalSlice from "./modal/modalSlice";

const store = configureStore({
  reducer: { cart: cartReducer, modal: modalSlice },
});

export default store;
