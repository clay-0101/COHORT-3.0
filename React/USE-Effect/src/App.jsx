import React, { useContext } from 'react'
import { Store, StrProvide } from './context/MyContext'
import Product from './components/Product'


const App = () => {
  console.log("Parent rendering..")

 
  return (
    <div className='bg-black h-screen text-white'>
      hello
    </div>
  )
}

export default App