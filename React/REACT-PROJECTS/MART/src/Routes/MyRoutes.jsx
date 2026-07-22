import React from 'react'
import { Route, Routes } from 'react-router'
import SignIn from '../PAGES/SIGN-IN/SignIn'
import SignUp from '../PAGES/SIGN-UP/SignUp'
import ProtectedRoute from '../Routes/ProtectedRoute'
import Home from '../PAGES/HOME/Home'
import Shop from '../PAGES/SHOP/Shop'
import About from '../PAGES/ABOUT/About'
import ProductDetail from '../PAGES/SHOP/Components/ProductDetail'
import ScrollToTop from './ScrollUpTo'

const MyRoutes = () => {
  return (
    <div>
      <ScrollToTop/>
        <Routes>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/' element={<SignIn/>}/>
            <Route element={<ProtectedRoute/>}>
                <Route path="/home" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}>
                <Route path='product/:id' element={<ProductDetail/>}/>
                </Route>
                <Route path="/about" element={<About/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default MyRoutes