import React from 'react'
import Home from './Components/Home'
import Contact from './Components/Contact'

import { NavLink } from 'react-router'
import MyRouter from './Routes/MyRouter'

const App = () => {
  return (
    <div>
      <h1 className='bg-red-400 text-4xl text-white text-center'>THIS IS THE MAIN APP</h1>
      <div className='flex gap-10'>
        <NavLink to={"/"}>HOME</NavLink>
        <NavLink to={"/contact"}>CONTACT</NavLink>
        <NavLink to={"/collection"}>COLLECTION</NavLink>
      </div>
      <MyRouter />
    </div>
  )
}

export default App