import { configureStore } from '@reduxjs/toolkit'
import logedINUserReducer from '../features/auth/state/addUserSlice'

 export const store = configureStore({
    reducer : {
        user : logedINUserReducer
    }
 })