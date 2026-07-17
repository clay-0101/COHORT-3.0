import React from 'react'
import { Routes,Route } from 'react-router'
import Home from '../Components/Home'
import Contact from '../Components/Contact'
import Collection from '../Components/Collection'
import Men from '../Components/Men'
import Women from '../Components/Women'
import Kid from '../Components/Kid'

const MyRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/collection' element={<Collection/>}>
            <Route path='men' element={<Men/>}/>
            <Route path='women' element={<Women/>}/>
            <Route path='kids' element={<Kid/>}/>

            </Route>
        </Routes>
    </div>
  )
}

export default MyRouter