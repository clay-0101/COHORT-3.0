import React, { useContext } from 'react'
import { MyStore } from '../Context/MyContext'
import { Navigate, Outlet, useNavigate } from 'react-router'
import Navbar from '../PAGES/HOME/Components/Navbar'
import Footer from '../PAGES/HOME/Components/Footer'
import Cart from '../PAGES/HOME/Components/Cart'

const ProtectedRoute = () => {
    let navigate = useNavigate()
    let { profile } = useContext(MyStore)
   let {cartToggle} = useContext(MyStore)
    return (
        <div 
        id="app-scroll-container"
        className='bg-black overflow-y-auto h-screen scrollbar-thin scrollbar-thumb-[#2f2e2e] scrollbar-thumb-hover:green-500  scrollbar-track-[#0d0d0d] relative'>
            {cartToggle && <Cart />}
            <Navbar />

            {profile ? <Outlet /> : <Navigate to={"/"} />}

            <Footer />
        </div>
    )
}

export default ProtectedRoute