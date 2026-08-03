import { createSlice } from "@reduxjs/toolkit";


let logedInUser = createSlice({
    name: 'logedInUser',
    initialState: {
        user: null,
        isAuthenticated: false,
        isLoading: true
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            state.isAuthenticated = true
            state.isLoading = false
        },
        removeUser: (state, action) => {
            state.user = null
            state.isAuthenticated = false
            state.isLoading = true
        }

    }

})

export const { setUser, removeUser } = logedInUser.actions;
export default logedInUser.reducer