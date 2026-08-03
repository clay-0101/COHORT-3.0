import { createSlice } from "@reduxjs/toolkit";

let tracksSlice = createSlice({
    name : 'track',
    initialState : {
        songsData : [],
    },
    reducers : {
        setSongsData : (state , action)=>{
            state.songsData = action.payload
        }
    }
})

export const {setSongsData} = tracksSlice.actions
export default tracksSlice.reducer;