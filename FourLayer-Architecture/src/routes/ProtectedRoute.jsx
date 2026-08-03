import React from 'react'
import { Outlet } from 'react-router'

const ProtectedRoute = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default ProtectedRoute