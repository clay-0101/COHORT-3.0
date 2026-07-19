import React, { useContext } from 'react'
import Navbar from './Components/Navbar'
import WelcomeBanner from './Components/WelcomeBanner'
import StatCards from './Components/StatCards'
import CategoryGrid from './Components/CategoryGrid'
import TopRated from './Components/Toprated'
import NewArrivals from './Components/NewArrivals'
import FeatureStrip from './Components/FeatureStrip'
import Footer from './Components/Footer'
import Cart from './Components/Cart'
import { MyStore } from '../../Context/MyContext'

const Home = () => {
let {cartToggle} = useContext(MyStore)
    return (
        <div className='bg-black overflow-y-auto h-screen scrollbar-thin scrollbar-thumb-[#2f2e2e] scrollbar-track-[#0d0d0d] relative'>
           {cartToggle && <Cart/>}
            <div>
                <Navbar />
            </div>

            <div className='mt-15'>
                <WelcomeBanner />
            </div>

            <div>
                <StatCards />
            </div>

            <div>
                <CategoryGrid />
            </div>

            <div className='product-lists-section px-[10vw] pt-[2.5vw] grid grid-cols-2 gap-6'>
                <TopRated />
                <NewArrivals />
            </div>

            <div >
                <FeatureStrip />
            </div>

            <div >
                <Footer />
            </div>
        </div>
    )
}

export default Home