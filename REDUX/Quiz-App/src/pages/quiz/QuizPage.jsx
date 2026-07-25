import React from 'react'
import { Outlet } from 'react-router'
import QuestionCard from './QuestionCart'
import { useState } from 'react'
import { useSelector } from 'react-redux'


const QuizPage = () => {
  let value = useSelector((state) => state.quiz.value)
  let isQuizStarted = useSelector((state) => state.quiz.isQuizStarted)
  let questionNum = useSelector((state) => state.quiz.questionNum)

  return (
    <div className='flex justify-center items-center'>
      {!isQuizStarted ? <Outlet /> : value.length > 0 && <QuestionCard question={value[questionNum-1]} />}

    </div>
  )
}

export default QuizPage