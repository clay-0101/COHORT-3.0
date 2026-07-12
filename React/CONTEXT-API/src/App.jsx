import React, { useContext } from 'react'
import { Shop } from './context/MyContext'
import Nav from './components/Nav'
import ProductCard from './components/ProductCard'
import CartCard from './components/CartCard'
import { useState } from 'react'


const App = () => {
  let products = useContext(Shop)
  const [showPage, setShowPage] = useState(true)
  const [cartItems, setCartItems] = useState([])

  function removeFromCart(id){
    let updatedCart = cartItems.filter((item)=> item.id !== id)
    setCartItems(updatedCart)
  }

  return (
    <div className='min-h-screen bg-gray-700 text-white px-[3vw] py-1.5'>
      <Nav setShowPage={setShowPage} />
      {showPage ? 
      <div className='mt-5 grid grid-cols-5 gap-3.5'>
        {products.map((card, idx) => {
          return <ProductCard key={idx} product={card} cartItems={cartItems} setCartItems={setCartItems}/>
        })}
      </div> 
      : 
      <div className='mt-5 flex flex-col items-center gap-5'>
        {cartItems.map((card, idx) => {
          return <CartCard key={idx} product={card} removeFromCart={removeFromCart} setCartItems={setCartItems}/>
        })}
      </div> }
    </div>
  )
}

export default App