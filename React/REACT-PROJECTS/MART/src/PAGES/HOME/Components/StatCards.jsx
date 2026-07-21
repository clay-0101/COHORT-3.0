import React, { useContext } from 'react'
import { Package, TrendingUp, Star, Tag } from 'lucide-react'
import { MyStore } from '../../../Context/MyContext'

const StatCards = () => {
   let {cartData} =  useContext(MyStore)
    return (
        <div className='px-[10vw] pt-[1.5vw] grid  gap-4 
                       lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>

            <div className='bg-[#0d0d0d] border-[0.1px] border-[#ffffff1f] rounded-2xl p-5 flex items-center gap-4'>
                <div className='w-11 h-11 bg-[#2a2a1a] rounded-xl flex items-center justify-center'>
                    <Package size={20} className='text-[#c8f400]' />
                </div>
                <div>
                    <p className='text-white text-[18px] font-[700]'>{cartData.length}</p>
                    <p className='text-[#dddddd] text-[13px] font-[500]'>Cart Items</p>
                    <p className='text-[#777777] text-[11px]'>In your bag</p>
                </div>
            </div>

            <div className='bg-[#0d0d0d] border-[0.1px] border-[#ffffff1f] rounded-2xl p-5 flex items-center gap-4'>
                <div className='w-11 h-11 bg-[#132030] rounded-xl flex items-center justify-center'>
                    <TrendingUp size={20} className='text-[#5aa9ff]' />
                </div>
                <div>
                    <p className='text-white text-[18px] font-[700]'>${cartData.reduce((acc , curr)=>{
                        return acc + (curr.price + curr.quantity)
                    },0).toFixed(2)}</p>
                    <p className='text-[#dddddd] text-[13px] font-[500]'>Cart Value</p>
                    <p className='text-[#777777] text-[11px]'>Ready to checkout</p>
                </div>
            </div>

            <div className='bg-[#0d0d0d] border-[0.1px] border-[#ffffff1f] rounded-2xl p-5 flex items-center gap-4'>
                <div className='w-11 h-11 bg-[#2a1f10] rounded-xl flex items-center justify-center'>
                    <Star size={20} className='text-[#ffb020]' />
                </div>
                <div>
                    <p className='text-white text-[18px] font-[700]'>5</p>
                    <p className='text-[#dddddd] text-[13px] font-[500]'>Top Products</p>
                    <p className='text-[#777777] text-[11px]'>Highly rated</p>
                </div>
            </div>

            <div className='bg-[#0d0d0d] border-[0.1px] border-[#ffffff1f] rounded-2xl p-5 flex items-center gap-4'>
                <div className='w-11 h-11 bg-[#211230] rounded-xl flex items-center justify-center'>
                    <Tag size={20} className='text-[#b57bff]' />
                </div>
                <div>
                    <p className='text-white text-[18px] font-[700]'>6</p>
                    <p className='text-[#dddddd] text-[13px] font-[500]'>Categories</p>
                    <p className='text-[#777777] text-[11px]'>To explore</p>
                </div>
            </div>

        </div>
    )
}

export default StatCards
