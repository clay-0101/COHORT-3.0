import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className='bg-black'>
      <Outlet/>
    </div>
  )
}

export default AuthLayout