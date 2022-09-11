import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: {
            token: localStorage.getItem('token')
        }
    },
    reducers: {
        setUser(state, action) {
            localStorage.setItem('token', action.payload.token)
        },
        removeTokenLocalStorage() {
            localStorage.removeItem('token')
        }
    }
})

export const usersAction = usersSlice.actions

export default usersSlice