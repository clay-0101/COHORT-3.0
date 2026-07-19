import React from 'react'
import Navbar from './Components/Navbar'
import WelcomeBanner from './Components/WelcomeBanner'
import StatCards from './Components/StatCards'
import CategoryGrid from './Components/CategoryGrid'
import TopRated from './Components/Toprated'
import NewArrivals from './Components/NewArrivals'
import FeatureStrip from './Components/FeatureStrip'
import Footer from './Components/Footer'

const Home = () => {
    return (
        <div className='bg-black overflow-y-auto h-screen scrollbar-thin scrollbar-thumb-[#2f2e2e] scrollbar-track-[#0d0d0d] '>

            <div className='navbar-section'>
                <Navbar />
            </div>

            <div className='welcome-section'>
                <WelcomeBanner />
            </div>

            <div className='stats-section'>
                <StatCards />
            </div>

            <div className='category-section'>
                <CategoryGrid />
            </div>

            <div className='product-lists-section px-[10vw] pt-[2.5vw] grid grid-cols-2 gap-6'>
                <TopRated />
                <NewArrivals />
            </div>

            <div className='feature-section'>
                <FeatureStrip />
            </div>

            <div className='footer-section'>
                <Footer />
            </div>
        </div>
    )
}

export default Home