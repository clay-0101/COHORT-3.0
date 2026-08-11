import React, { useEffect } from 'react'
import Main from './Pages/Main/Main'
import SecondPage from './Pages/Second/SecondPage'

import CardsGrid from './Pages/Second/components/CardGrid'
import Bio from './Pages/Bio/Bio'
import About from './Pages/About/About'
import { Outlet } from 'react-router'
import Footer from './Pages/Footer/Footer'


const App = () => {

    return (
        <div >
            <Main />
            <SecondPage />
            <Bio/>
            <Footer/>
       
        </div>
    )
}

export default App