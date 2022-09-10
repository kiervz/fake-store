import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: []
    },
    reducers: {
        getCategories(state, action) {
            state.categories = action.payload
        },
    }
})

export const categoriesAction = categoriesSlice.actions

export default categoriesSlice