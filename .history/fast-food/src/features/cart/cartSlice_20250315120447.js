import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {},
    deleteItem(state, action) {},
    increaseQuantity(state, action) {},
    decreaseQuantity(state, action) {},
    clearCart(state, action) {},
  },
});

const { addItem, deleteItem, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions;
