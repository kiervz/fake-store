import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories-slice";
import productsSlice from "./products-slice";
import usersSlice from "./users-slice";

const store = configureStore({
    reducer: {
        category: categoriesSlice.reducer,
        product: productsSlice.reducer,
        user: usersSlice.reducer
    }
})

export default store