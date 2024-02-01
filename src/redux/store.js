import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../redux/Slices/sliderSlice";
import productReducer from "../redux/Slices/productSlice";

const appStore = configureStore({
    reducer: {
        slider: sliderReducer,
        products: productReducer,
    }
});

export default appStore;