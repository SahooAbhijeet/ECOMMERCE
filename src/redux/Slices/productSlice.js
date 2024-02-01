import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../utils/constants";

const productSlice = createSlice({
    name: "products",
    initialState: {
        filteredProducts:
            JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    },
    reducers: {
        filterProducts: (state, action) => {
            try {
                const filter = storeData.filter((product) => product.type === action.payload);
                state.filteredProducts = filter;
                const saveData = JSON.stringify(filter);
                sessionStorage.setItem("filteredData", saveData);
            } catch (error) {
                throw error;
            }

        },
    }
});

export const { filterProducts } = productSlice.actions;

export default productSlice.reducer;