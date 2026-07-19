import React from 'react'
import { Laptop, Shirt, Armchair, Home, Dumbbell, Backpack, ArrowRight } from 'lucide-react'

const CategoryGrid = () => {
    return (
        <div className='px-[10vw] pt-[2.5vw]'>

            <div className='flex justify-between items-center mb-4'>
                <h2 className='text-white text-[1.3vw] font-[700]'>Shop by Category</h2>
                <p className='text-[#c8f400] text-[14px] font-[600] flex items-center gap-1'>View All <ArrowRight size={14} /></p>
            </div>

            <div className='grid grid-cols-4 gap-4'>

                <div className='bg-white rounded-2xl p-6 text-center'>
                    <Laptop size={26} className='mx-auto mb-2 text-neutral-800' />
                    <p className='font-[700] text-neutral-900 text-[15px]'>Electronics</p>
                    <p className='text-neutral-500 text-[12px]'>17 items</p>
                </div>

                <div className='bg-white rounded-2xl p-6 text-center'>
                    <Shirt size={26} className='mx-auto mb-2 text-neutral-800' />
                    <p className='font-[700] text-neutral-900 text-[15px]'>Clothing</p>
                    <p className='text-neutral-500 text-[12px]'>2 items</p>
                </div>

                <div className='bg-white rounded-2xl p-6 text-center'>
                    <Armchair size={26} className='mx-auto mb-2 text-neutral-800' />
                    <p className='font-[700] text-neutral-900 text-[15px]'>Furniture</p>
                    <p className='text-neutral-500 text-[12px]'>3 items</p>
                </div>

                <div className='bg-white rounded-2xl p-6 text-center'>
                    <Home size={26} className='mx-auto mb-2 text-neutral-800' />
                    <p className='font-[700] text-neutral-900 text-[15px]'>Home</p>
                    <p className='text-neutral-500 text-[12px]'>14 items</p>
                </div>

                <div className='bg-white rounded-2xl p-6 text-center'>
                    <Dumbbell size={26} className='mx-auto mb-2 text-neutral-800' />
                    <p className='font-[700] text-neutral-900 text-[15px]'>Sports</p>
                    <p className='text-neutral-500 text-[12px]'>8 items</p>
                </div>

                <div className='bg-white rounded-2xl p-6 text-center'>
                    <Backpack size={26} className='mx-auto mb-2 text-neutral-800' />
                    <p className='font-[700] text-neutral-900 text-[15px]'>Accessories</p>
                    <p className='text-neutral-500 text-[12px]'>6 items</p>
                </div>

            </div>
        </div>
    )
}

export default CategoryGrid