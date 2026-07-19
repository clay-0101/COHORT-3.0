import React from 'react'
import { Zap , ShoppingCart, LogOut} from 'lucide-react'

const Navbar = () => {
    return (
        <div className='bg-[#0d0d0d] flex justify-between items-center px-[10vw] py-[0.8vw]'>
            <div className="flex items-center justify-center gap-2.5 ">
                <div className="w-8 h-8 bg-[#c8f400] rounded-lg flex items-center justify-center">
                    <Zap size={18} className="text-neutral-900" fill="currentColor" />
                </div>
                <span className="text-xl font-medium text-white">
                    Sky <span className="text-[#c8f400]">Mart</span>
                </span>
            </div>
            <div className='flex gap-6 text-[#bbbbbb] text-[14px] font-[500]'>
                <p>Home</p>
                <p>Shop</p>
                <p>Product</p>
            </div>
            <div className='flex items-center gap-3'>
                <div className=' px-2 py-2 rounded-xl text-[12px] flex justify-center items-center font-[500] gap-2 bg-[#1b1b1b] text-[#bbbbbb] border-[0.1px] border-[#ffffff4e] flex '>
                    <div className='h-[1.5vw] w-[1.5vw] flex justify-center items-center text-black bg-[#c8f400] rounded-lg px-2 py-2 font-medium'>R</div>
                    <p>ramesh</p>
                </div>
                <div className='px-2 py-2 rounded-xl bg-[#1b1b1b] border-[0.1px] border-[#ffffff4e] text-[#bbbbbb] flex justify-center items-center'>
                    <ShoppingCart size={18} />
                </div>
                <div className='px-2 py-2 rounded-xl bg-[#1b1b1b] border-[0.1px] border-[#ffffff4e] text-[#bbbbbb]  flex justify-center items-center'>
                    <LogOut 
                    size={18}
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar