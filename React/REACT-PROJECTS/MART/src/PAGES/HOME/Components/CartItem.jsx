import { Minus, Plus, Trash2 } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { MyStore } from '../../../Context/MyContext'

const CartItem = ({ item }) => {
    let { cartData, setCartData, productsData, setProductsData } = useContext(MyStore)

    function delCartItem() {
        let updatedCartData = cartData.filter((val) => val.id !== item.id)
        let updateAllProduct = productsData.map((prod) => {
            return prod.id === item.id ? { ...prod, added: true } : prod
        })
        setProductsData(updateAllProduct)
        localStorage.setItem('savedProducts', JSON.stringify(updateAllProduct))
        setCartData(updatedCartData)
        localStorage.setItem('cartItems', JSON.stringify(updatedCartData))
    }


    return (
        <div className='flex gap-3 sm:gap-4 p-3 border border-[#f2f1f11a] rounded-xl bg-[#181818] hover:bg-[#1c1c1c] transition-colors duration-200 group'>

            <div className='w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-lg overflow-hidden bg-white'>
                <img
                    src={item.images[0]}
                    alt='img here'
                    className='w-full h-full object-contain'
                />
            </div>


            <div className='flex-1 flex flex-col justify-between min-w-0'>
                <div className='flex justify-between items-start gap-2'>
                    <p className='text-white text-sm sm:text-base font-[500] truncate'>
                        {item.title}
                    </p>
                    <Trash2
                        onClick={() => {
                            delCartItem()
                        }}
                        size={16}
                        className='text-gray-500 hover:text-red-500 cursor-pointer shrink-0 transition-colors duration-200 opacity-70 group-hover:opacity-100'
                    />
                </div>

                <div className='flex justify-between items-end mt-2'>

                    <div className='flex items-center gap-2 sm:gap-3 bg-[#0d0d0d] border border-[#f2f1f11a] rounded-full px-2 py-1'>
                        <Minus
                            onClick={() => {
                                if (item.quantity === 1) {
                                    delCartItem()
                                    return
                                }
                                let UpdateQty = cartData.map((val) => {
                                    return val.id === item.id ? { ...val, quantity: (val.quantity || 0) - 1 } : val
                                })
                                setCartData(UpdateQty)
                                localStorage.setItem('cartItems', JSON.stringify(UpdateQty))

                            }}
                            size={14}
                            className='text-gray-400 hover:text-[#c8f400] cursor-pointer transition-colors duration-200'
                        />
                        <span className='text-white text-sm w-4 text-center'>
                            {item.quantity}
                        </span>
                        <Plus
                            onClick={() => {

                                let UpdateQty = cartData.map((val) => {
                                    return val.id === item.id ? { ...val, quantity: (val.quantity || 0) + 1 } : val
                                })
                                setCartData(UpdateQty)
                                localStorage.setItem('cartItems', JSON.stringify(UpdateQty))

                            }}
                            size={14}
                            className='text-gray-400 hover:text-[#c8f400] cursor-pointer transition-colors duration-200'
                        />
                    </div>


                    <div className='text-right'>
                        <p className='text-[#c8f400] font-[600] text-sm sm:text-base'>
                            ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <p className='text-gray-500 text-[10px] sm:text-xs'>
                            ${item.price.toFixed(2)} each
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem