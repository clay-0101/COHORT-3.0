import { Star, ShoppingCart, Heart, ArrowLeft, ChevronLeft, ChevronRight, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { MyStore } from "../../../Context/MyContext";
import ProductCard from "./ProductCard";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

const ProductDetail = () => {
  let { id } = useParams()
  let navigate = useNavigate()
  const [singleProduct, setsingleProduct] = useState(null)
 
  let { setCartToggle, cartData, setCartData, productsData, setProductsData } = useContext(MyStore)
 let currIndex = productsData.findIndex((item) => item.id === Number(id))
  let singleProductData = async () => {
    try {
      let res = await axios.get(`https://dummyjson.com/products/${id}`)
      setsingleProduct(res.data)
    } catch (error) {
      console.log('error =>', error)
    }
  }

  useEffect(() => {
    setsingleProduct(null)
    singleProductData()
    window.scrollTo(0, 0)
  }, [id])

  function addToCart() {
    let upDataCartData = [...cartData, { ...singleProduct, quantity: (singleProduct.quantity || 0) + 1 }]
    let updateAllData = productsData.map((val) => {
      return val.id === singleProduct.id ? { ...val, added: false } : val
    })
    setProductsData(updateAllData)
    setCartData(upDataCartData)
    setCartToggle(true)

    localStorage.setItem('savedProducts', JSON.stringify(updateAllData))
    localStorage.setItem('cartItems', JSON.stringify(upDataCartData))
  }

  if (!singleProduct) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Loading...
      </div>
    )
  }

  let relatedProducts = productsData.filter(
    (item) => item.category === singleProduct.category && item.id !== singleProduct.id
  )

  return (
    <div className="min-h-screen bg-black px-3 py-6 text-white sm:px-6 sm:py-10 lg:px-10">
      {/* Breadcrumb */}
      <div className="mb-4 flex flex-wrap items-center gap-1.5  text-xs text-neutral-400 sm:mb-6 sm:gap-2 sm:text-sm">
        <div
          onClick={() => navigate('/shop')}
          className="flex gap-1 items-center hover:text-white">
          <ArrowLeft
            className="h-3.5 w-3.5 cursor-pointer transition-colors duration-200  sm:h-4 sm:w-4"
          />
          <span className="cursor-pointer transition-colors duration-200 ">Products</span>
        </div>
        <span>/</span>
        <span className="cursor-pointer transition-colors duration-200 hover:text-white">{singleProduct.category}</span>
        <span>/</span>
        <span className="text-white">{singleProduct.title}</span>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
        <div className="flex h-56 items-center justify-center rounded-xl bg-white xs:h-72 sm:h-96 lg:h-[520px] lg:rounded-2xl">
          <img
            src={singleProduct.images[0]}
            alt={singleProduct.title}
            className="h-full w-full rounded-xl object-cover lg:rounded-2xl"
          />
        </div>

        <div className="flex flex-col">
          <span className="w-fit rounded-full bg-[#c8f40020] px-3 py-1 text-xs font-medium text-[#c8f400]">
            {singleProduct.category}
          </span>

          <h1 className="mt-3 text-2xl font-bold sm:text-3xl lg:text-4xl">
            {singleProduct.title}
          </h1>

          <div className="mt-2 flex items-center gap-1.5 text-sm text-neutral-400 sm:mt-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white">{singleProduct.rating}</span>
            <span>({singleProduct.reviews?.length || 0} reviews)</span>
          </div>

          <div className="mt-4 border-t border-neutral-800 pt-4 sm:mt-6 sm:pt-6">
            <span className="text-3xl font-bold text-[#c8f400] sm:text-4xl">
              ${singleProduct.price.toFixed(2)}
            </span>
          </div>

          <p className="mt-4 border-t border-neutral-800 pt-4 text-sm leading-relaxed text-neutral-400 sm:mt-6 sm:pt-6 sm:text-base">
            {singleProduct.description}
          </p>

          {/* Actions */}
          <div className="mt-5 flex items-center gap-3 sm:mt-6">
            {productsData[currIndex].added ? <button
              onClick={() => addToCart()}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#c8f400] py-3 text-sm font-semibold text-black transition-transform duration-200 hover:scale-[1.02] active:scale-98 sm:text-base"
            >
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
              Add to Cart
            </button> : <button
              className=" text-green-400  rounded-xl  border-[#02ea0654] bg-[#02ea0620] flex flex-1 items-center justify-center gap-2 rounded-full  py-3 text-sm font-semibold  transition-transform duration-200 hover:scale-[1.02] active:scale-98 sm:text-base"
            >
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
              Added !
            </button>}

          </div>

          {/* Perks */}
          <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-3">
            <div className="flex flex-col items-center gap-1 rounded-xl border border-neutral-800 px-2 py-3 text-center sm:gap-2 sm:py-4">
              <Truck className="h-5 w-5 text-[#c8f400]" />
              <p className="text-[11px] font-medium sm:text-xs">Free Delivery</p>
              <p className="text-[9px] text-neutral-500 sm:text-[10px]">On orders $50+</p>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-xl border border-neutral-800 px-2 py-3 text-center sm:gap-2 sm:py-4">
              <ShieldCheck className="h-5 w-5 text-[#c8f400]" />
              <p className="text-[11px] font-medium sm:text-xs">Secure Pay</p>
              <p className="text-[9px] text-neutral-500 sm:text-[10px]">256-bit SSL</p>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-xl border border-neutral-800 px-2 py-3 text-center sm:gap-2 sm:py-4">
              <RotateCcw className="h-5 w-5 text-[#c8f400]" />
              <p className="text-[11px] font-medium sm:text-xs">Easy Returns</p>
              <p className="text-[9px] text-neutral-500 sm:text-[10px]">30-day policy</p>
            </div>
          </div>

          {/* Prev / Next */}
          <div className="mt-5 flex items-center gap-3 sm:mt-6">
            <button
              onClick={() => {
                if (currIndex === 1) {
                  navigate(`/shop/product/${productsData[productsData.length - 1].id}`)
                  return
                }
                let prevIndex = (currIndex - 1)
                navigate(`/shop/product/${productsData[prevIndex].id}`)
              }}
              className="flex flex-1 items-center justify-center gap-1 rounded-full bg-neutral-800 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-700 active:scale-98 sm:text-base">
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>
            <button
              onClick={() => {
                let nextIndex = (currIndex + 1) % productsData.length
                navigate(`/shop/product/${productsData[nextIndex].id}`)
              }}
              className="flex flex-1 items-center justify-center gap-1 rounded-full bg-[#c8f400] py-3 text-sm font-medium text-black transition-transform duration-200 hover:scale-[1.02] active:scale-98 sm:text-base">
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-10 sm:mt-14 lg:mt-16">
        <h2 className="mb-4 text-xl font-bold sm:mb-6 sm:text-2xl">Related Products</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-5">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail