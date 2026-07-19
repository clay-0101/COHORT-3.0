import React, { useContext } from 'react'
import { Zap, ArrowRight, ShoppingBag, Headphones, Pen, Shirt, Image, FlaskConical } from 'lucide-react'
import { MyStore } from '../../../Context/MyContext'

const NewArrivals = () => {
   let {productsData} = useContext(MyStore)

  let newArrival = [...productsData]
  .sort((a, b) => new Date(b.meta.createdAt) - new Date(a.meta.createdAt))
  .slice(0, 8);
  console.log(newArrival)  // sort top 8 new arrivals 

    return (
        <div className='bg-white rounded-2xl p-6'>

            <div className='flex justify-between items-center mb-4'>
                <h3 className='flex items-center gap-2 font-[700] text-neutral-900 text-[15px]'>
                    <Zap size={16} className='text-[#c8f400]' fill="#c8f400" /> New Arrivals
                </h3>
                <p className='text-[#8bb800] text-[13px] font-[600] flex items-center gap-1'>See all <ArrowRight size={13} /></p>
            </div>

            <div className='flex flex-col gap-2'>

                <div className='flex justify-between items-center border-[0.1px] border-neutral-100 rounded-xl px-3 py-2'>
                    <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center'>
                            <Headphones size={18} className='text-neutral-700' />
                        </div>
                        <span className='text-[#8bb800] font-[600] text-[14px]'>$99.99</span>
                    </div>
                    <div className='w-8 h-8 bg-[#c8f40026] rounded-lg flex items-center justify-center'>
                        <ShoppingBag size={15} className='text-[#8bb800]' />
                    </div>
                </div>

                <div className='flex justify-between items-center border-[0.1px] border-neutral-100 rounded-xl px-3 py-2'>
                    <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center'>
                            <Pen size={18} className='text-neutral-700' />
                        </div>
                        <span className='text-[#8bb800] font-[600] text-[14px]'>$299.99</span>
                    </div>
                    <div className='w-8 h-8 bg-[#c8f40026] rounded-lg flex items-center justify-center'>
                        <ShoppingBag size={15} className='text-[#8bb800]' />
                    </div>
                </div>

                <div className='flex justify-between items-center border-[0.1px] border-neutral-100 rounded-xl px-3 py-2'>
                    <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center'>
                            <Shirt size={18} className='text-neutral-700' />
                        </div>
                        <span className='text-[#8bb800] font-[600] text-[14px]'>$24.99</span>
                    </div>
                    <div className='w-8 h-8 bg-[#c8f40026] rounded-lg flex items-center justify-center'>
                        <ShoppingBag size={15} className='text-[#8bb800]' />
                    </div>
                </div>

                <div className='flex justify-between items-center border-[0.1px] border-neutral-100 rounded-xl px-3 py-2'>
                    <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center'>
                            <Image size={18} className='text-neutral-700' />
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
                            <FlaskConical size={18} className='text-neutral-700' />
                        </div>
                        <span className='text-[#8bb800] font-[600] text-[14px]'>$34.99</span>
                    </div>
                    <div className='w-8 h-8 bg-[#c8f40026] rounded-lg flex items-center justify-center'>
                        <ShoppingBag size={15} className='text-[#8bb800]' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewArrivals