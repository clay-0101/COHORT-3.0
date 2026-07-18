import React, { useContext } from 'react'
import { MyStore } from '../Context/MyContext'
import { Navigate, Outlet, useNavigate } from 'react-router'

const ProtectedRoute = () => {
    let navigate = useNavigate()
    let { profile } = useContext(MyStore)
    return (
        <div>
            {profile ? <Outlet/> : <Navigate to={"/"}/>}
        </div>
    )
}

export default ProtectedRoute