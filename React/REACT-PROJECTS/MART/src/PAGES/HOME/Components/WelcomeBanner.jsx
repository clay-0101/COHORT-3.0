import React from 'react'
import { ArrowRight, Package, Truck } from 'lucide-react'
import { useNavigate } from 'react-router'

const WelcomeBanner = () => {
    let navigate = useNavigate()
    return (
        <div className='px-4 sm:px-6 md:px-10 lg:px-[10vw] pt-4 sm:pt-6 lg:pt-[2vw]'>
            <div className='relative overflow-hidden bg-[#0d0d0d] border-[0.1px] border-[#ffffff1f] rounded-2xl lg:rounded-[1.5vw] px-5 sm:px-8 lg:px-[3vw] py-6 sm:py-8 lg:py-[2.5vw] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-6'>

                <div className='w-full lg:max-w-[32vw]'>
                    <p className='text-[#c8f400] text-[11px] sm:text-[12px] font-[600] tracking-[0.15em] uppercase mb-3'>Good morning 👋</p>
                    <h1
                        className='text-white text-3xl sm:text-4xl lg:text-[2.8vw] font-[700] leading-[1.1]'>
                        Welcome back, <br />
                        <span className='text-[#c8f400]'>ramesh!</span>
                    </h1>
                    <p className='text-[#999999] text-sm mt-4'>
                        Discover today's picks — hand-curated products across electronics, fashion, and more.
                    </p>

                    <div className='flex flex-wrap items-center gap-3 mt-6'>
                        <button
                            onClick={() => {
                                navigate('/shop')
                            }}
                            className='bg-[#c8f400] cursor-pointer relative hover:scale-105 hover:-translate-y-2 transition-all duration-300 text-black text-sm font-[600] rounded-full px-5 sm:px-6 py-2.5 flex items-center gap-2'>
                            Shop Now <ArrowRight size={16} />
                        </button>
                        <button
                            onClick={() => {
                                navigate('/shop')
                            }}
                            className='border-[0.1px] cursor-pointer relative hover:scale-105 hover:-translate-y-2 transition-all duration-300 border-[#ffffff33] text-white text-sm font-[600] rounded-full px-5 sm:px-6 py-2.5'>
                            View All Products
                        </button>
                    </div>
                </div>

                <div className='flex flex-row lg:flex-col gap-3 w-full lg:w-auto'>
                    <div className='flex-1 lg:flex-none bg-[#c8f40014] border-[0.1px] border-[#c8f4004d] rounded-2xl px-4 sm:px-6 py-4 text-center'>
                        <p className='text-[#c8f400] text-xl sm:text-2xl lg:text-[1.6vw] font-[700]'>20+</p>
                        <p className='text-[#cccccc] text-[11px] sm:text-[12px]'>Products Available</p>
                    </div>
                    <div className='flex-1 lg:flex-none bg-[#1b1b1b] border-[0.1px] border-[#ffffff33] rounded-2xl px-4 sm:px-6 py-4 text-center'>
                        <p className='text-white text-xl sm:text-2xl lg:text-[1.6vw] font-[700]'>Free</p>
                        <p className='text-[#999999] text-[11px] sm:text-[12px]'>Delivery on ₹999+</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeBanner