import React from 'react'
import { NavLink, Outlet } from 'react-router'
import MyRouter from '../Routes/MyRouter'

const Collection = () => {
    return (
        <div className='flex flex-col justify-center  items-center gap-10 min-h-[10vw] bg-amber-300'>
            <div className='flex justify-center gap-10'>
                <NavLink to={"/collection/men"}>MEN</NavLink>
                <NavLink to={"/collection/women"}>WOMEN</NavLink>
                <NavLink to={"/collection/kids"}>KID</NavLink>
            </div>
            <div className='flex justify-center items-center h-[15vw] w-[80%]'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Collection