import { PackageOpen, ShoppingBag, X } from 'lucide-react'
import React, { useContext } from 'react'
import { MyStore } from '../../../Context/MyContext'
import CartItem from '../Components/CartItem'
import { useNavigate } from 'react-router'
import {toast} from "react-toastify"




const Cart = () => {
    let { setCartToggle, cartData, setCartData, productsData, setProductsData } = useContext(MyStore)

    let isEmpty = cartData.length
    let navigate = useNavigate()

    return (
        <div 
        onClick={()=>setCartToggle(false)}
        className='h-screen w-screen fixed bg-[#00000071] backdrop-blur-[2px] flex justify-end z-20 animate-slidein'>
            <div
            onClick={(e)=>{
                e.stopPropagation()
            }}
             className='bg-[#111111] h-screen w-full sm:w-[70%] md:w-[45%] lg:w-[28%] border-[0.1px] border-[#f2f1f12d] flex flex-col'>


                <div className='flex justify-between items-center text-white p-4.5 border-b-[0.1px] border-[#f2f1f1d4]'>
                    <div className='flex items-center gap-5'>
                        <ShoppingBag className='text-[#c8f400]' size={22} />
                        <p className='text-xl font-[500]'>Cart</p>
                        {!isEmpty && (
                            <span className='text-xs bg-[#c8f400] text-black font-[600] px-2 py-0.5 rounded-full'>
                                {cartData.length} items
                            </span>
                        )}
                    </div>
                    <X
                        onClick={() => setCartToggle(false)}
                        size={20}
                        className='text-gray-500 hover:text-white cursor-pointer transition-colors duration-200'
                    />
                </div>
                {!isEmpty ? (
                    <div className='flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center'>
                        <div className='w-20 h-20 rounded-full bg-[#181818] border border-[#f2f1f11a] flex items-center justify-center'>
                            <PackageOpen size={32} className='text-gray-500' />
                        </div>
                        <div>
                            <p className='text-white text-lg font-[500]'>Cart is empty</p>
                            <p className='text-gray-500 text-sm mt-1'>Go shop something cool!</p>
                        </div>
                        <button
                            onClick={() => {
                                setCartToggle(false)
                                navigate('/shop')
                            }}
                            className='mt-2 bg-[#c8f400] hover:bg-[#b5dd00] text-black font-[600] px-6 py-2.5 rounded-full transition-colors duration-200'>
                            Browse Products
                        </button>
                    </div>
                ) : (
                    <>

                        <div className='flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
                            {cartData.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>
                        <div className='border-t-[0.1px] border-[#f2f1f1d4] p-4.5 flex flex-col gap-3'>
                            <div className='flex justify-between items-center text-white'>
                                <p className='text-base'>Total</p>
                                <p className='text-xl font-[600]'>${cartData.reduce((acc, curr) => {
                                    return acc + (curr.price * curr.quantity)
                                }, 0).toFixed(2)}</p>
                            </div>
                            <button
                                onClick={() => {
                                    toast.success("Order Placed🛒")
                                    let resetCart = productsData.map((val) => {
                                        return { ...val, added: true }
                                    })
                                    setProductsData(resetCart)
                                    setCartData([])
                                    
                                    localStorage.setItem('cartItems', JSON.stringify([]))
                                    localStorage.setItem('savedProducts', JSON.stringify(resetCart))
                                    setCartToggle(false)
                                }}
                                className='w-full bg-[#c8f400] hover:bg-[#b5dd00] text-black font-[600] py-3 rounded-full flex items-center justify-center gap-2 transition-colors duration-200'>
                                Checkout →
                            </button>
                            <p
                                onClick={() => {
                                    let resetCart = productsData.map((val) => {
                                        return { ...val, added: true }
                                    })
                                    setProductsData(resetCart)
                                    setCartData([])

                                    localStorage.setItem('cartItems', JSON.stringify([]))
                                    localStorage.setItem('savedProducts', JSON.stringify(resetCart))
                                }}
                                className='text-center text-gray-500 text-xs hover:text-white cursor-pointer transition-colors duration-200'>
                                Clear cart
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Cart