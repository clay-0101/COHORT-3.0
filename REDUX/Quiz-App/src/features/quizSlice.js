import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const quizSlice = createSlice({
    name: "quiz",
    initialState: {
        value: JSON.parse(localStorage.getItem('presentQuizSession')) || [],
        isQuizStarted: JSON.parse(localStorage.getItem('isQuizStarted')) || false,
        questionNum: 1,
        selectedAnswers: [],
        
    },
    reducers: {
        getQuestionData: (state, action) => {
            state.value = action.payload;
            localStorage.setItem('presentQuizSession', JSON.stringify(action.payload))
        },
        setQuizStarted: (state, action) => {
            state.isQuizStarted = action.payload
            localStorage.setItem('isQuizStarted', JSON.stringify(action.payload))
        },
        nextPage: (state) => {
            state.questionNum += 1
        },
        prevPage: (state) => {
            if (state.questionNum === 1) return
            state.questionNum -= 1
        },
        setSelectedAnswer: (state, action) => {
            const { questionNum, answer } = action.payload;
            state.selectedAnswers[questionNum - 1] = answer;
        },
     

        resetQuiz: (state) => {
            state.value = [];
            state.isQuizStarted = false;
            state.questionNum = 1;
            state.selectedAnswers = [];
            localStorage.setItem('isQuizStarted', JSON.stringify(false))
            localStorage.setItem('presentQuizSession', JSON.stringify([]))
        }

    }
});

export const { getQuestionData, setQuizStarted, nextPage, prevPage, setSelectedAnswer, resetQuiz } = quizSlice.actions;

export default quizSlice.reducer;
