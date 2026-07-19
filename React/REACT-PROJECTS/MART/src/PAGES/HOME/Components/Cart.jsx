import { ShoppingBag, X } from 'lucide-react'
import React, { useContext } from 'react'
import { MyStore } from '../../../Context/MyContext'

const Cart = () => {
   let {setCartToggle} = useContext(MyStore)
    return (
        <div className='h-screen w-screen fixed bg-[#00000071] backdrop-blur-[2px] flex justify-end z-20 animate-slidein'>
            <div className='bg-[#111111] h-screen w-[28%] border-[0.1px] border-[#f2f1f12d]'>
                <div className='flex justify-between items-center text-white p-4.5 border-b-[0.1px] border-[#f2f1f1d4]'>
                    <div className='flex items-center gap-5 '>
                        <ShoppingBag
                        className='text-[#c8f400]'
                            size={22}
                        />
                        <p className='text-xl font-[500]'>Cart</p>
                    </div>
                    <X
                        onClick={()=>{
                            setCartToggle(false)
                        }}
                        size={20}
                        className='text-gray-500 hover:text-white' />
                </div>
            </div>
        </div>
    )
}

export default Cart