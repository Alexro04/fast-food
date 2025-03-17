import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
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

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, curr) => current.quantity + sum, 0);
