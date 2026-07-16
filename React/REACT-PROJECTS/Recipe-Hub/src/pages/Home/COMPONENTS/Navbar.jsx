import React from 'react'
import { Search, ShoppingCart } from 'lucide-react'

const Navbar = () => {
    return (
        <div className='flex w-full justify-center items-center gap-[5vw] bg-white py-2 border-b border-[#aca7a79e]'>
            <h1 className='text-2xl font-bold text-[#fd6800]'>🍽️&nbsp;RecipeHub</h1>
            <div className='flex items-center border-2 rounded-3xl px-3 gap-3'>
                <Search size={20} />
                <input className='outline-none w-[20vw] py-1 ' type="text" placeholder=' Search' />
            </div>
            <div className='flex items-center gap-3'>
                <ShoppingCart
                className='cursor-pointer active:scale-98'
                    size={28}/>
                    <span className='relative right-5 -top-2 bg-[#fd6800] px-1.5  font-medium text-[12px]  rounded-full'>0</span>
                    
                <img className='h-10 w-10 rounded-full object-cover' src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D" alt="chef" />
            </div>
        </div>
    )
}

export default Navbar