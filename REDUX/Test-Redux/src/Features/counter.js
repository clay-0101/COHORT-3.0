import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : 'counter',
    initialState : {
        value : 0
    },

    reducers : {
        Increment : (state)=>{
            state.value += 1
        },
        Decrement : (state)=>{
            state.value  -= 1
        }
    }
  
})

export const {Increment, Decrement} = counterSlice.actions
export default counterSlice.reducer
