import React, { useContext } from 'react'
import { Zap, ShoppingCart, LogOut } from 'lucide-react'
import { MyStore } from '../../../Context/MyContext'
import { NavLink, useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const Navbar = () => {
  let navigate =  useNavigate()
    let { profile, setProfile, setCartToggle, cartData } = useContext(MyStore)

    const navLinkClass = ({ isActive }) => isActive ? 'text-[#c8f400]' : 'text-[#bbbbbb]'

    return (
        <div className='bg-[#0d0d0da4] backdrop-blur-[3px] flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-[10vw] py-3 lg:py-[0.8vw] w-full fixed top-0 z-10 gap-2'>
            <div className="flex items-center justify-center gap-2 sm:gap-2.5 shrink-0">
                <div className="w-8 h-8 bg-[#c8f400] rounded-lg flex items-center justify-center shrink-0">
                    <Zap size={18} className="text-neutral-900" fill="currentColor" />
                </div>
                <span className="text-lg sm:text-xl font-medium text-white whitespace-nowrap">
                    Sky <span className="text-[#c8f400]">Mart</span>
                </span>
            </div>

            <div className='flex gap-3 sm:gap-5 md:gap-6 text-[12px] sm:text-[13px] md:text-[14px] font-[500] shrink-0'>
                <NavLink to='/home' className={navLinkClass}>Home</NavLink>
                <NavLink to='/shop' className={navLinkClass}>Shop</NavLink>
                <NavLink to='/about' className={navLinkClass}>About</NavLink>
            </div>

            <div className='flex items-center gap-2 sm:gap-3 shrink-0'>
                <div className='px-2 py-2 rounded-xl text-[12px] flex justify-center items-center font-[500] gap-2 bg-[#1b1b1b] text-[#bbbbbb] border-[0.1px] border-[#ffffff4e]'>
                    <div className='h-6 w-6 lg:h-[1.5vw] lg:w-[1.5vw] flex justify-center items-center text-black bg-[#c8f400] rounded-lg font-medium shrink-0'>
                        {profile.name[0].toUpperCase()}
                    </div>
                    <p className='hidden sm:block max-w-[100px] truncate'>{profile.name}</p>
                </div>
                <div
                    onClick={() => setCartToggle(true)}
                    className='hover:text-[#c8f400] relative cursor-pointer px-2 py-2 rounded-xl bg-[#1b1b1b] border-[0.1px] border-[#ffffff4e] text-[#bbbbbb] flex justify-center items-center'>
                    <ShoppingCart size={18} />
                    <div 
                    style={{backgroundColor : cartData.length ? "#c8f400" : 'transparent'}}
                    className='h-5 w-5 flex justify-center items-center rounded-full text-[12px] font-medium text-black absolute -top-1.5 -right-2'>{cartData.length? cartData.length : ''}</div>
                </div>
                <div
                    onClick={() => {
                        toast.error('User logged out')
                        navigate('/')
                        setProfile(null)
                        localStorage.setItem('userProfile', null)
                    }}
                    className='hover:text-[#f31a1a87] hover:bg-[#ff51513e] cursor-pointer px-2 py-2 rounded-xl bg-[#1b1b1b] border-[0.1px] border-[#ffffff4e] text-[#bbbbbb] flex justify-center items-center'>
                    <LogOut size={18} />
                </div>
            </div>
        </div>
    )
}

export default Navbar