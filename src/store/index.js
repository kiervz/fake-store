import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories-slice";

const store = configureStore({
    reducer: {
        category: categoriesSlice.reducer
    }
})

export default store