import { configureStore } from '@reduxjs/toolkit'
import logedINUserReducer from '../features/auth/state/addUserSlice'
import trackReducer from '../features/home/state/searchSlice'

 export const store = configureStore({
    reducer : {
        user : logedINUserReducer,
        track : trackReducer
    }
 })