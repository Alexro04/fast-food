import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //action.payload = newObj
      const pizza = state.cart.find(
        (item) => item.name === action.payload.name,
      );
      if (pizza) {
        pizza.quantity++;
      } else {
        state.cart.push(action.payload);
      }
    },
    deleteItem(state, action) {
      // action.payload = id of item to be deleted
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseQuantity(state, action) {
      //action.payload = id of item
      const pizza = state.cart.find((item) => item.pizzaId === action.payload);
      pizza.quantity++;
    },
    decreaseQuantity(state, action) {
      //action.payload = id of item
      const pizza = state.cart.find((item) => item.pizzaId === action.payload);
      pizza.quantity--;

      if (pizza.quantity === 0)
        cartSlice.caseReducers.deleteItem(state, action);
    },
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
  state.cart.cart.reduce(
    (sum, curr) => curr.quantity * curr.unitPrice + sum,
    0,
  );

export const getCart = (state) => state.cart.cart;

export const getCartItem = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id);
