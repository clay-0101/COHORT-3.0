import React, { useContext } from 'react'
import Navbar from './pages/Home/COMPONENTS/Navbar'
import Form from './pages/Home/COMPONENTS/Form'
import RecipeCard from './pages/Home/COMPONENTS/RecipeCard'
import { useState } from 'react'
import CartPage from './pages/Cart/Cartpage'
import { MyStore } from './Context/MyContext'


const App = () => {

let {onHome ,recipeData} = useContext(MyStore)

  return (
    <div className='h-screen w-screen bg-[#fef6eb] flex flex-col items-center gap-5'>
      <Navbar/>
      {onHome ?<div className='w-[60%] h-[90%] flex gap-5'>
         <div><Form /></div>
         <div>
          <h1 className='font-bold text-2xl'>Discover Recipes</h1>
          <p className='text-[12px] font-medium text-gray-500'>Top curated recipes for your next meal.</p>
          <div id='cardsDiv' className='h-[90%] w-[35vw] grid grid-cols-2 auto-rows-min gap-4  mt-5 overflow-y-auto scrollbar-none'>
              {recipeData.map((elem)=>{
                return <RecipeCard  key={elem.id} cardData={elem}/>
              })}
          </div>
         </div>
      </div> :   <CartPage/> }
     

    </div>
  )
}

export default App