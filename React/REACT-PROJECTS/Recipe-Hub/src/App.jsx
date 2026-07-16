import React from 'react'
import Navbar from './pages/Home/COMPONENTS/Navbar'
import Form from './pages/Home/COMPONENTS/Form'
import RecipeCard from './pages/Home/COMPONENTS/RecipeCard'
import { useState } from 'react'
import CartPage from './pages/Cart/Cartpage'

const App = () => {

const [recipeData, setRecipeData] = useState( [
  {
    id: 1,
    name: "Classic Margherita",
    chefName: "Chef Mario",
    price: 24,
    prepTime: "30",
    rating: 4.8,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1723734005340-9ca5218a3311?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Hand-stretched sourdough base topped with mozzarella and fresh basil.",
  },
  {
    id: 2,
    name: "Salmon Zen Bowl",
    chefName: "Chef Elena",
    price: 32,
    prepTime: "25",
    rating: 4.9,
    imageUrl:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60",
    description:
      "Healthy salmon bowl with avocado, quinoa and vegetables.",
  },
  {
    id: 3,
    name: "Prime Wagyu Steak",
    chefName: "Chef Giovanni",
    price: 65,
    prepTime: "45",
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=60",
    description:
      "Premium A5 Wagyu served with truffle mashed potatoes.",
  },
])


  return (
    <div className='h-screen w-screen bg-[#fef6eb] flex flex-col items-center gap-5'>
      <Navbar/>
      <CartPage/>
      {/* <div className='w-[60%] h-[90%] flex gap-5'>
         <div><Form setRecipeData={setRecipeData}/></div>
         <div>
          <h1 className='font-bold text-2xl'>Discover Recipes</h1>
          <p className='text-[12px] font-medium text-gray-500'>Top curated recipes for your next meal.</p>
          <div id='cardsDiv' className='h-[90%] w-[35vw] grid grid-cols-2 auto-rows-min gap-4  mt-5 overflow-y-auto scrollbar-none'>
              {recipeData.map((elem)=>{
                return <RecipeCard  key={elem.id} cardData={elem}/>
              })}
          </div>
         </div>
      </div> */}
    </div>
  )
}

export default App