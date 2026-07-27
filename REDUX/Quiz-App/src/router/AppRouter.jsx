import { createBrowserRouter, RouterProvider, Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/home/HomePage'
import QuizPage from '../pages/quiz/QuizPage'
import SavedPage from '../pages/saved/SavedPage'
import QuizForm from '../pages/quiz/QuizForm'
import ScoreScreen from '../pages/quiz/ScoreScreen'


function ProtectedSavedPage() {
  const isQuizStarted = useSelector((state) => state.quiz.isQuizStarted)
  return isQuizStarted ? <Navigate to="/quiz" replace /> : <SavedPage />
}

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "quiz",
          element: <QuizPage />,
          children: [
            {
              path: "",
              element: <QuizForm />
            }
          ]
        },
        {
          path: "score",
          element: <ScoreScreen />,
        },
        {
          path: "saved",
          element: <ProtectedSavedPage />, // guarded route
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default AppRouter
