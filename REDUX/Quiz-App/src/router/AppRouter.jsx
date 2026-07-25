import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/home/HomePage'
import QuizPage from '../pages/quiz/QuizPage'
import SavedPage from '../pages/saved/SavedPage'
import QuizForm from '../pages/quiz/QuizForm'
import ScoreScreen from '../pages/quiz/ScoreScreen'

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
                    children : [
                        {
                            path : "",
                            element : <QuizForm/>
                        }
                    ]
                },
                
                {
                    path: "score",
                    element: <ScoreScreen />,
                },
                
                {
                    path: "saved",
                    element: <SavedPage />,
                }
            ]
        }])

    return <RouterProvider router={router} />
}

export default AppRouter