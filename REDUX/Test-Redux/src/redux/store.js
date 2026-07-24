import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../Features/counter'

export const store = configureStore({
    reducer :{
        counter : counterReducer
    }
})