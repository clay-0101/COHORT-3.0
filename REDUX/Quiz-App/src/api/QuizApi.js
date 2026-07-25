import axios from "axios";
import {useDispatch, useSelector} from "react-redux"
import { getQuestionData } from "../features/quizSlice";
import React from "react";


function shuffleArray(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export async function getQuiz(data, dispatch) {
  try {
    const res = await axios.get(
      `https://the-trivia-api.com/v2/questions?limit=${data.totalQuiz}&categories=${data.category}&difficulties=${data.difficulty}`
    );

    dispatch(getQuestionData(res.data.map(val => {
      const choices = shuffleArray([val.correctAnswer, ...val.incorrectAnswers]);
      return {
        id : val.id,
        question: val.question.text,
        choices,
        correctAnswer : val.correctAnswer,
        category : val.category,
        type  : val.difficulty,
        saved : false
      };
    })));
  } catch (error) {
    console.log(error);
  }
}

