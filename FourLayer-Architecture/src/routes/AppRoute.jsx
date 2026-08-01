import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import PublicRoute from "./PublicRoute";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import AuthLayout from "../app/Layout/AuthLayout";




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
        }

    ])
    return <RouterProvider router={router} />
}

export default AppRoute