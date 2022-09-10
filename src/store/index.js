import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories-slice";
import productsSlice from "./products-slice";

const store = configureStore({
    reducer: {
        category: categoriesSlice.reducer,
        product: productsSlice.reducer,
    }
})

export default store