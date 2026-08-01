import React from 'react'
import { Outlet } from 'react-router'

const PublicRoute = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default PublicRoute