import React from 'react'
import { Route, Routes } from 'react-router'
import SignIn from '../PAGES/SIGN-IN/SignIn'
import SignUp from '../PAGES/SIGN-UP/SignUp'
import ProtectedRoute from '../Routes/ProtectedRoute'
import Home from '../PAGES/HOME/Home'
import Shop from '../PAGES/SHOP/Shop'
import About from '../PAGES/ABOUT/About'

const MyRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/' element={<SignIn/>}/>
            <Route element={<ProtectedRoute/>}>
                <Route path="/home" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/about" element={<About/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default MyRoutes