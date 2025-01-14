import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cardSlice"; // Ensure the path to cartSlice is correct

export const store = configureStore({
    reducer: {
        cart: cartReducer, // Use 'cart' as the key for this slice
    },
});
