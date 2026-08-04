import { createSlice } from "@reduxjs/toolkit";
import { playTrackAction } from "../api/searchApi";

const playSlice = createSlice({
    name : 'playing',
    initialState : {
        play : {},
        isLoading : false,
    },
    extraReducers :(builder)=>{
        builder
        .addCase(playTrackAction.pending, ((state, action)=>{
            state.isLoading = true
        }))
        .addCase(playTrackAction.fulfilled, ((state, action)=>{
            state.isLoading = false
            state.play = action.payload
        }))
        .addCase(playTrackAction.rejected, ((state, action)=>{
            state.isLoading = false
            console.log('rejectedd')
        }))
    }
})

export default playSlice.reducer