import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "../3-feature/admin/cake-bookings/ShoppingSlice";
import { authReducer } from "../../src/Slices/authSlice.js";
const store = configureStore({
  reducer: {
    auth: authReducer,
    shopping: shoppingReducer,
  },
});

export default store;
