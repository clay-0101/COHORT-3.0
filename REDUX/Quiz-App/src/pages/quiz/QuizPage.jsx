import React from 'react'
import { Outlet } from 'react-router'

const QuizPage = () => {
  return (
    <div className='flex justify-center items-center'>
      <Outlet/>
    </div>
  )
}

export default QuizPage