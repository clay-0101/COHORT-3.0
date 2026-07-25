import { createSlice } from "@reduxjs/toolkit";


let saveSlice = createSlice({
    name : 'saveQuiz',
    initialState : {
        value : JSON.parse(localStorage.getItem('savedQuiz')) || []
    },
    reducers : {
        saveToLocal: (state , action)=>{
            state.value = action.payload
            localStorage.setItem('savedQuiz',JSON.stringify(action.payload))
        }
    }
})

export const {saveToLocal} = saveSlice.actions
export default saveSlice.reducer