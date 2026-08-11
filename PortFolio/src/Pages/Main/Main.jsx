import React from 'react'
import Background from './components/Background'
import Navbar from './components/Navbar'
import HeroText from './components/HeroText'
import BuildingBadge from './components/RightText'

const Main = () => {  
  return (
    <div className="relative w-full h-screen overflow-hidden">
        <Navbar/>
        <Background/>
        <HeroText/>
        <BuildingBadge/>
    </div>
  )
}

export default Main