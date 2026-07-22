import React from 'react'
import { Zap, Package, Users, Star, Truck, ShieldCheck, Heart, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router'

const About = () => {
 let navigate = useNavigate()
    return (
        <div className='bg-black min-h-screen pt-28 sm:pt-32 lg:pt-[8vw] pb-16 px-4 sm:px-6 md:px-10 lg:px-[10vw]'>

       
            <div className='flex flex-col items-center text-center'>
                <div className='w-12 h-12 sm:w-14 sm:h-14 bg-[#c8f400] rounded-2xl flex items-center justify-center mb-6 animate-float'>
                    <Zap size={28} className='text-neutral-900' fill='currentColor' />
                </div>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white'>
                    About <span className='text-[#c8f400]'>SkyMart</span>
                </h1>
                <p className='text-[#999999] text-sm sm:text-base mt-4 max-w-xl'>
                    SkyMart is a next-generation e-commerce platform built to make online
                    shopping fast, fair, and enjoyable — for everyone.
                </p>
            </div>

        
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12'>
                <div className='border border-[#ffffff1f] rounded-2xl py-6 sm:py-7 flex flex-col items-center justify-center gap-2 hover:border-[#c8f4004d] transition-colors'>
                    <Package size={20} className='text-[#c8f400]' />
                    <p className='text-white text-xl sm:text-2xl font-bold'>20K+</p>
                    <p className='text-[#888888] text-xs sm:text-sm'>Products</p>
                </div>
                <div className='border border-[#ffffff1f] rounded-2xl py-6 sm:py-7 flex flex-col items-center justify-center gap-2 hover:border-[#c8f4004d] transition-colors'>
                    <Users size={20} className='text-[#c8f400]' />
                    <p className='text-white text-xl sm:text-2xl font-bold'>50K+</p>
                    <p className='text-[#888888] text-xs sm:text-sm'>Happy Customers</p>
                </div>
                <div className='border border-[#ffffff1f] rounded-2xl py-6 sm:py-7 flex flex-col items-center justify-center gap-2 hover:border-[#c8f4004d] transition-colors'>
                    <Star size={20} className='text-[#c8f400]' />
                    <p className='text-white text-xl sm:text-2xl font-bold'>4.9</p>
                    <p className='text-[#888888] text-xs sm:text-sm'>Avg. Rating</p>
                </div>
                <div className='border border-[#ffffff1f] rounded-2xl py-6 sm:py-7 flex flex-col items-center justify-center gap-2 hover:border-[#c8f4004d] transition-colors'>
                    <Truck size={20} className='text-[#c8f400]' />
                    <p className='text-white text-xl sm:text-2xl font-bold'>99%</p>
                    <p className='text-[#888888] text-xs sm:text-sm'>On-time Delivery</p>
                </div>
            </div>

    
            <div className='border border-[#ffffff1f] rounded-2xl p-6 sm:p-8 md:p-10 mt-12'>
                <h2 className='text-white text-xl sm:text-2xl font-bold mb-5'>Our Story</h2>
                <div className='space-y-4 text-[#999999] text-sm sm:text-base leading-relaxed'>
                    <p>
                        SkyMart started in 2022 as a small side project — two engineers tired of
                        bloated, slow e-commerce experiences. We asked ourselves: what if shopping
                        online was actually <span className='italic text-[#bbbbbb]'>enjoyable</span>?
                    </p>
                    <p>
                        Three years later, SkyMart serves over 50,000 customers across the country.
                        We stock electronics, fashion, jewelry, and everyday essentials — all at
                        prices that don't require a second mortgage.
                    </p>
                    <p>
                        We're still the same team at heart: obsessed with speed, transparency, and
                        making you feel good about every purchase you make here.
                    </p>
                </div>
            </div>

            
            <h2 className='text-white text-2xl sm:text-3xl font-bold text-center mt-16 mb-8'>
                What We Stand For
            </h2>
            <div className='grid md:grid-cols-2 gap-4'>
                <div className='border border-[#ffffff1f] rounded-2xl p-5 sm:p-6 flex gap-4 hover:border-[#c8f4004d] transition-colors'>
                    <div className='w-10 h-10 rounded-xl bg-[#1b1b1b] flex items-center justify-center shrink-0'>
                        <ShieldCheck size={18} className='text-[#c8f400]' />
                    </div>
                    <div>
                        <h3 className='text-white font-semibold mb-1'>Trust</h3>
                        <p className='text-[#888888] text-sm leading-relaxed'>
                            Every product is verified for quality and authenticity before listing.
                        </p>
                    </div>
                </div>
                <div className='border border-[#ffffff1f] rounded-2xl p-5 sm:p-6 flex gap-4 hover:border-[#c8f4004d] transition-colors'>
                    <div className='w-10 h-10 rounded-xl bg-[#1b1b1b] flex items-center justify-center shrink-0'>
                        <Truck size={18} className='text-[#c8f400]' />
                    </div>
                    <div>
                        <h3 className='text-white font-semibold mb-1'>Speed</h3>
                        <p className='text-[#888888] text-sm leading-relaxed'>
                            We obsess over delivery times so your orders arrive when promised.
                        </p>
                    </div>
                </div>
                <div className='border border-[#ffffff1f] rounded-2xl p-5 sm:p-6 flex gap-4 hover:border-[#c8f4004d] transition-colors'>
                    <div className='w-10 h-10 rounded-xl bg-[#1b1b1b] flex items-center justify-center shrink-0'>
                        <Heart size={18} className='text-[#c8f400]' />
                    </div>
                    <div>
                        <h3 className='text-white font-semibold mb-1'>Community</h3>
                        <p className='text-[#888888] text-sm leading-relaxed'>
                            Built around real customer feedback, not just business metrics.
                        </p>
                    </div>
                </div>
                <div className='border border-[#ffffff1f] rounded-2xl p-5 sm:p-6 flex gap-4 hover:border-[#c8f4004d] transition-colors'>
                    <div className='w-10 h-10 rounded-xl bg-[#1b1b1b] flex items-center justify-center shrink-0'>
                        <Star size={18} className='text-[#c8f400]' />
                    </div>
                    <div>
                        <h3 className='text-white font-semibold mb-1'>Quality</h3>
                        <p className='text-[#888888] text-sm leading-relaxed'>
                            We curate the best — no filler, no junk, just great products.
                        </p>
                    </div>
                </div>
            </div>

            
            <h2 className='text-white text-2xl sm:text-3xl font-bold text-center mt-16 mb-8'>
                Meet the Team
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <div className='border border-[#ffffff1f] rounded-2xl py-8 px-4 flex flex-col items-center text-center hover:border-[#c8f4004d] transition-colors'>
                    <div className='w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg mb-4 bg-[#c8f400] text-neutral-900'>
                        A
                    </div>
                    <p className='text-white font-semibold text-sm sm:text-base'>Aryan Shah</p>
                    <p className='text-[#888888] text-xs sm:text-sm mt-1'>Founder & CEO</p>
                </div>
                <div className='border border-[#ffffff1f] rounded-2xl py-8 px-4 flex flex-col items-center text-center hover:border-[#c8f4004d] transition-colors'>
                    <div className='w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg mb-4 bg-[#3b82f6] text-white'>
                        P
                    </div>
                    <p className='text-white font-semibold text-sm sm:text-base'>Priya Mehta</p>
                    <p className='text-[#888888] text-xs sm:text-sm mt-1'>Head of Product</p>
                </div>
                <div className='border border-[#ffffff1f] rounded-2xl py-8 px-4 flex flex-col items-center text-center hover:border-[#c8f4004d] transition-colors'>
                    <div className='w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg mb-4 bg-[#a855f7] text-white'>
                        R
                    </div>
                    <p className='text-white font-semibold text-sm sm:text-base'>Rohan Verma</p>
                    <p className='text-[#888888] text-xs sm:text-sm mt-1'>Lead Engineer</p>
                </div>
                <div className='border border-[#ffffff1f] rounded-2xl py-8 px-4 flex flex-col items-center text-center hover:border-[#c8f4004d] transition-colors'>
                    <div className='w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg mb-4 bg-[#f43f5e] text-white'>
                        S
                    </div>
                    <p className='text-white font-semibold text-sm sm:text-base'>Sneha Kapoor</p>
                    <p className='text-[#888888] text-xs sm:text-sm mt-1'>Design Director</p>
                </div>
            </div>

          
            <div className='border border-dashed border-[#c8f4004d] rounded-2xl py-12 px-6 flex flex-col items-center text-center mt-16'>
                <h2 className='text-white text-2xl sm:text-3xl font-bold'>Ready to shop?</h2>
                <p className='text-[#888888] text-sm sm:text-base mt-2'>
                    Explore thousands of products at unbeatable prices.
                </p>
                <button 
                onClick={()=> navigate('/shop')}
                className='mt-6 bg-[#c8f400] text-neutral-900 font-semibold px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-[#b3dc00] transition-colors'>
                    Browse Products <ArrowRight size={18} />
                </button>
            </div>

        </div>
    )
}

export default About