import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


const appStore = configureStore({
    reducer: {  // reducer is responsible for modify appStore , for each slice we have a different reducer, it is just big reducer
    cart: cartReducer,
    }
});

export default appStore