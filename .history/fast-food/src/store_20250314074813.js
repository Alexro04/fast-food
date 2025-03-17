import { configureStore } from "@reduxjs/toolkit";
import suserReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
