import React from 'react'
import { Outlet } from 'react-router'

const PrivateRoute = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default PrivateRoute