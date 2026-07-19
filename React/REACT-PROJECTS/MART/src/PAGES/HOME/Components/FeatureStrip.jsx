import React from 'react'
import { Truck, ShieldCheck, BadgePercent } from 'lucide-react'

const FeatureStrip = () => {
    return (
        <div className='px-[10vw] pt-[2.5vw] grid grid-cols-3 gap-4'>

            <div className='flex items-center gap-3 bg-[#0d0d0d] border-[0.1px] border-[#ffffff1f] rounded-2xl px-5 py-4'>
                <Truck size={20} className='text-[#c8f400]' />
                <div>
                    <p className='text-white text-[14px] font-[500]'>Fast Delivery</p>
                    <p className='text-[#777777] text-[12px]'>Same-day on select items</p>
                </div>
            </div>

            <div className='flex items-center gap-3 bg-[#0d0d0d] border-[0.1px] border-[#ffffff1f] rounded-2xl px-5 py-4'>
                <ShieldCheck size={20} className='text-[#5aa9ff]' />
                <div>
                    <p className='text-white text-[14px] font-[500]'>Secure Payments</p>
                    <p className='text-[#777777] text-[12px]'>100% encrypted checkout</p>
                </div>
            </div>

            <div className='flex items-center gap-3 bg-[#0d0d0d] border-[0.1px] border-[#ffffff1f] rounded-2xl px-5 py-4'>
                <BadgePercent size={20} className='text-[#7cd48a]' />
                <div>
                    <p className='text-white text-[14px] font-[500]'>Best Prices</p>
                    <p className='text-[#777777] text-[12px]'>Price-match guarantee</p>
                </div>
            </div>

        </div>
    )
}

export default FeatureStrip