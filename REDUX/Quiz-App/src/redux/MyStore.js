import { configureStore } from '@reduxjs/toolkit'
import quizSliceReducer from '../features/quizSlice'
import savedQuizReducer from '../features/saveQuiz'

export const store = configureStore({
    reducer : {
        quiz : quizSliceReducer,
        saveQuiz : savedQuizReducer
    }
})
