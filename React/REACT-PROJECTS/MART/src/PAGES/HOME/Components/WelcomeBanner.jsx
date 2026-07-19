import React from 'react'
import { ArrowRight, Package, Truck } from 'lucide-react'

const WelcomeBanner = () => {
    return (
        <div className='px-[10vw] pt-[2vw]'>
            <div className='relative overflow-hidden bg-[#0d0d0d] border-[0.1px] border-[#ffffff1f] rounded-[1.5vw] px-[3vw] py-[2.5vw] flex justify-between items-center'>

                <div className='max-w-[32vw]'>
                    <p className='text-[#c8f400] text-[12px] font-[600] tracking-[0.15em] uppercase mb-3'>Good morning 👋</p>
                    <h1 className='text-white text-[2.8vw] font-[700] leading-[1.1]'>
                        Welcome back, <br />
                        <span className='text-[#c8f400]'>ramesh!</span>
                    </h1>
                    <p className='text-[#999999] text-[14px] mt-4'>
                        Discover today's picks — hand-curated products across electronics, fashion, and more.
                    </p>

                    <div className='flex items-center gap-3 mt-6'>
                        <button className='bg-[#c8f400] text-black text-[14px] font-[600] rounded-full px-6 py-2.5 flex items-center gap-2'>
                            Shop Now <ArrowRight size={16} />
                        </button>
                        <button className='border-[0.1px] border-[#ffffff33] text-white text-[14px] font-[600] rounded-full px-6 py-2.5'>
                            View All Products
                        </button>
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <div className='bg-[#c8f40014] border-[0.1px] border-[#c8f4004d] rounded-2xl px-6 py-4 text-center'>
                        <p className='text-[#c8f400] text-[1.6vw] font-[700]'>20+</p>
                        <p className='text-[#cccccc] text-[12px]'>Products Available</p>
                    </div>
                    <div className='bg-[#1b1b1b] border-[0.1px] border-[#ffffff33] rounded-2xl px-6 py-4 text-center'>
                        <p className='text-white text-[1.6vw] font-[700]'>Free</p>
                        <p className='text-[#999999] text-[12px]'>Delivery on ₹999+</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeBanner