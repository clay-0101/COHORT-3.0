import React, { useContext } from 'react'
import { Shop } from './context/MyContext'
import Nav from './components/Nav'
import ProductCard from './components/ProductCard'
import CartCard from './components/CartCard'
import { useState } from 'react'



const App = () => {
  let {products,  cartItems , setCartItems} = useContext(Shop)
  const [showPage, setShowPage] = useState(true)
 

  function removeFromCart(id){
    let updatedCart = cartItems.filter((item)=> item.id !== id)
    setCartItems(updatedCart)
    localStorage.setItem('saved',JSON.stringify(updatedCart))
  }

  return (
    <div className='min-h-screen bg-gray-700 text-white px-[3vw] py-1.5 relative'>
      <Nav setShowPage={setShowPage} />
      {showPage ? 
      <div className='mt-5 grid grid-cols-5 gap-3.5'>
        {products.map((card, idx) => {
          return <ProductCard key={idx} product={card}/>
        })}
      </div> 
      : 
      <div className='mt-5 flex flex-col items-center gap-5'>
        {cartItems.map((card, idx) => {
          return <CartCard key={idx} product={card} removeFromCart={removeFromCart}/>
        })}
      </div> }

    </div>
  )
}

export default App