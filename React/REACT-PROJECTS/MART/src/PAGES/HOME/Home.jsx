import React, { useContext } from 'react'
import WelcomeBanner from './Components/WelcomeBanner'
import StatCards from './Components/StatCards'
import CategoryGrid from './Components/CategoryGrid'
import TopRated from './Components/TopRated'
import NewArrivals from './Components/NewArrivals'
import FeatureStrip from './Components/FeatureStrip'



const Home = () => {

    return (
        <div >
            <div className='mt-15'>
                <WelcomeBanner />
            </div>

            <div>
                <StatCards />
            </div>

            <div>
                <CategoryGrid />
            </div>

            <div className='product-lists-section px-[10vw] pt-[2.5vw] grid lg:grid-cols-2 md:grid-cols-1 gap-6'>
                <TopRated />
                <NewArrivals />
            </div>

            <div >
                <FeatureStrip />
            </div>


        </div>
    )
}

export default Home