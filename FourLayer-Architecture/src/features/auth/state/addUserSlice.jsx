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
            isAuthenticated = true
            isLoading = false
        },
        removeUser: (state, action) => {
            state.user = null
            isAuthenticated = false
            isLoading = true
        }

    }

})

export const {setUser, removeUser} = logedInUser.actions;
export default logedInUser.reducer