import React from 'react'
import { Star, ArrowRight, ShoppingBag, Cookie, Watch, Monitor, Speaker, Camera } from 'lucide-react'

const TopRated = () => {
    return (
        <div className='bg-white rounded-2xl p-6'>

            <div className='flex justify-between items-center mb-4'>
                <h3 className='flex items-center gap-2 font-[700] text-neutral-900 text-[15px]'>
                    <Star size={16} className='text-[#ffb020]' fill="#ffb020" /> Top Rated
                </h3>
                <p className='text-[#8bb800] text-[13px] font-[600] flex items-center gap-1'>See all <ArrowRight size={13} /></p>
            </div>

            <div className='flex flex-col gap-2'>

                <div className='flex justify-between items-center border-[0.1px] border-neutral-100 rounded-xl px-3 py-2'>
                    <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center'>
                            <Cookie size={18} className='text-neutral-700' />
                        </div>
                        <span className='text-[#8bb800] font-[600] text-[14px]'>$599.99</span>
                    </div>
                    <div className='w-8 h-8 bg-[#c8f40026] rounded-lg flex items-center justify-center'>
                        <ShoppingBag size={15} className='text-[#8bb800]' />
                    </div>
                </div>

                <div className='flex justify-between items-center border-[0.1px] border-neutral-100 rounded-xl px-3 py-2'>
                    <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center'>
                            <Watch size={18} className='text-neutral-700' />
                        </div>
                        <span className='text-[#8bb800] font-[600] text-[14px]'>$199.99</span>
                    </div>
                    <div className='w-8 h-8 bg-[#c8f40026] rounded-lg flex items-center justify-center'>
                        <ShoppingBag size={15} className='text-[#8bb800]' />
                    </div>
                </div>

                <div className='flex justify-between items-center border-[0.1px] border-neutral-100 rounded-xl px-3 py-2'>
                    <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center'>
                            <Monitor size={18} className='text-neutral-700' />
                        </div>
                        <span className='text-[#8bb800] font-[600] text-[14px]'>$349.99</span>
                    </div>
                    <div className='w-8 h-8 bg-[#c8f40026] rounded-lg flex items-center justify-center'>
                        <ShoppingBag size={15} className='text-[#8bb800]' />
                    </div>
                </div>

                <div className='flex justify-between items-center border-[0.1px] border-neutral-100 rounded-xl px-3 py-2'>
                    <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center'>
                            <Speaker size={18} className='text-neutral-700' />
                        </div>
                        <span className='text-[#8bb800] font-[600] text-[14px]'>$49.99</span>
                    </div>
                    <div className='w-8 h-8 bg-[#c8f40026] rounded-lg flex items-center justify-center'>
                        <ShoppingBag size={15} className='text-[#8bb800]' />
                    </div>
                </div>

                <div className='flex justify-between items-center border-[0.1px] border-neutral-100 rounded-xl px-3 py-2'>
                    <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center'>
                            <Camera size={18} className='text-neutral-700' />
                        </div>
                        <span className='text-[#8bb800] font-[600] text-[14px]'>$149.99</span>
                    </div>
                    <div className='w-8 h-8 bg-[#c8f40026] rounded-lg flex items-center justify-center'>
                        <ShoppingBag size={15} className='text-[#8bb800]' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TopRated