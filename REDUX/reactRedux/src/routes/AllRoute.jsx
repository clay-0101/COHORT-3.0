import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import PrivateRoute from '../PrivateRoutes/PrivateRoute'
import LoginCard from '../pages/LoginCard'
import PublicRoute from '../PublicRoutes/PublicRoute'
import Home from '../pages/Home'


import React, { useEffect } from 'react'
import RegisterCard from '../pages/RegisterCard'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/AuthSlice'

const AppRoutes = () => {
    let dispatch = useDispatch()
 function hydrateUser(){
    let logedInUser = JSON.parse(localStorage.getItem('logedInUser'))

    if(!logedInUser){
        alert('Not Valid User')
        return
    }

    dispatch(setUser(logedInUser))
 }

 useEffect(()=>{
    hydrateUser()
 }, [])

    let router = createBrowserRouter([
        {
            path: '/',
            element: <PrivateRoute />,
            children: [
                {
                    path: '',
                    element: <LoginCard />
                },
                {
                    path: 'register',
                    element: <RegisterCard />
                }
            ]
        },
        {
            path: '/home',
            element: <PublicRoute />,
            children: [
                {
                    path: '',
                    element: <Home />
                }
            ]
        }
    ])


    return <RouterProvider router={router} />
}

export default AppRoutes