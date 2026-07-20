import React from 'react'
import { ShoppingBag } from 'lucide-react'
const TopProducts = ({item}) => {
    return (
        <div className='flex justify-between items-center border-[0.1px] border-neutral-100 rounded-xl px-3 py-2'>
            <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center'>
                   <img src={item.images[0]} alt="" />
                </div>
                <span className='text-[#8bb800] font-[600] text-[14px]'>$599.99</span>
            </div>
            <div className='w-8 h-8 bg-[#c8f40026] rounded-lg flex items-center justify-center text-[#8bb800] hover:bg-[#c8f400] hover:text-black cursor-pointer'>
                <ShoppingBag size={15}  />
            </div>
        </div>
    )
}

export default TopProducts