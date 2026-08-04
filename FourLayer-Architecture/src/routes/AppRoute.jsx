import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from './ProtectedRoute'
import LoginPage from '../features/auth/ui/pages/LoginPage'
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import AuthLayout from "../app/Layout/AuthLayout";
import Home from '../features/home/ui/Home';
import MainLayout from "../app/Layout/MainLayout";
import MusicPlayerCard from "../features/home/ui/pages/MusicPlayer";



const AppRoute = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <PublicRoute />,
            children: [
                {
                    path: "",
                    element: <AuthLayout />,
                    children: [
                        {
                            path: "",
                            element: <LoginPage />
                        },
                        {
                            path: "register",
                            element: <RegisterPage />
                        }
                    ]
                }

            ]
        },
        {
            path : '/home',
            element : <ProtectedRoute/>,
            children:[
                {
                    path : '',
                    element : <MainLayout/>,
                    children:[
                        {
                            path : '',
                            element : <Home/>
                        },
                        {
                            path : 'play/:id',
                            element : <MusicPlayerCard/>
                        }
                    ]
                }
            ]
        }

    ])
    return <RouterProvider router={router} />
}

export default AppRoute