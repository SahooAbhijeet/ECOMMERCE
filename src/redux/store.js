import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../redux/Slices/sliderSlice";
import productReducer from "../redux/Slices/productSlice";
import cartReducer from "../redux/Slices/cartSlice";
import authReducer from "../redux/Slices/authSlice";

const appStore = configureStore({
    reducer: {
        slider: sliderReducer,
        products: productReducer,
        cart: cartReducer,
        auth: authReducer
    }
});

export default appStore;