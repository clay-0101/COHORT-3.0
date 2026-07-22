import { Star, ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../../../Context/MyContext";
import { useState } from "react";
import { useNavigate } from "react-router";


const ProductCard = ({ product }) => {
 let navigate = useNavigate()
  let { setCartToggle, cartData, setCartData, setFilterData, productsData, setProductsData, productQty, setProductQty } = useContext(MyStore)

  function addToCart() {
    let upDataCartData = [...cartData, { ...product, quantity: (product.quantity || 0) + 1 }]
    let updateAllData = productsData.map((val) => {
      return val.id === product.id ? { ...val, added: false } : val
    })
    setProductsData(updateAllData)
    setCartData(upDataCartData)
    setCartToggle(true)

    localStorage.setItem('savedProducts', JSON.stringify(updateAllData))
    localStorage.setItem('cartItems', JSON.stringify(upDataCartData))

  }

  return (
    <div 
    onClick={()=>{
      navigate(`/shop/product/${product.id}`)
    }}
    className="group w-full max-w-[280px] overflow-hidden rounded-xl bg-neutral-900 transition-colors duration-300 hover:bg-neutral-800 sm:rounded-2xl">
      {/* Image */}
      <div className="relative h-36 overflow-hidden bg-white xs:h-44 sm:h-64">
        <span className="absolute left-2 top-2 z-10 rounded-full bg-neutral-800/80 px-2 py-0.5 text-[10px] text-white sm:left-3 sm:top-3 sm:px-3 sm:py-1 sm:text-xs">
          {product.category}
        </span>
        <img
          src={product.images[0]}
          alt='1'
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
        />
      </div>

      {/* Details */}
      <div className="p-2.5 sm:p-4">
        <p className="text-[10px] text-neutral-500 sm:text-xs">{product.category}</p>
        <h3 className="mt-0.5 truncate text-sm font-semibold text-white transition-colors duration-300 group-hover:text-[#c8f400] sm:mt-1 sm:text-base">
          {product.title}
        </h3>

        <div className="mt-1 flex items-center gap-1 text-xs text-neutral-400 sm:mt-2 sm:text-sm">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 sm:h-4 sm:w-4" />
          <span>{product.rating}</span>
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-between border-t border-neutral-800 pt-2 sm:mt-3 sm:pt-3">
          <span className="text-sm font-medium text-[#c8f400] sm:text-lg">
            ${product.price.toFixed(2)}
          </span>
          {product.added ? <button
            onClick={() => {
              addToCart()
            }}
            className="flex items-center gap-1 active:scale-98 rounded-full bg-[#c8f400] px-2.5 py-0.5 text-xs font-medium text-black transition-transform duration-200 hover:scale-105 sm:px-4 sm:py-2 sm:text-sm">
            <ShoppingCart className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className=" xs:inline">Add</span>
          </button> : <p className="text-green-400 text-[14px] rounded-xl px-3 border-[#02ea0654] bg-[#02ea0620] ">
            Added!
          </p>}
        </div>
      </div>
    </div>
  );
}

export default ProductCard