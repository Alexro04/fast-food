import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 6,
      unitPrice: 16,
      totalPrice: 16 * 4,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //action.payload = newObj
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {},
    increaseQuantity(state, action) {},
    decreaseQuantity(state, action) {},
    clearCart(state) {
      state.cart = [];
    },
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

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, curr) => curr.quantity + sum, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, curr) => curr.totalPrice + sum, 0);
