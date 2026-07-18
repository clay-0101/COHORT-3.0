import React from 'react'
import { Route, Routes } from 'react-router'
import SignIn from '../PAGES/SIGN-IN/SignIn'
import SignUp from '../PAGES/SIGN-UP/SignUp'
// import ProtectedRoute from '../Routes/ProtectedRoute'
import Home from '../PAGES/HOME/Home'

const MyRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/' element={<SignIn/>}/>
            {/* <Route element={<ProtectedRoute/>}>
                <Route path="/home" element={<Home/>}/>
            </Route> */}
        </Routes>
    </div>
  )
}

export default MyRoutes