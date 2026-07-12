import React from 'react'

const Nav = ({ setShowPage }) => {
    return (
        <div className='bg-blue-600 flex justify-between items-center px-5 py-3'>
            <img className="h-10" src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
            <div className='flex gap-[2vw]'>
                <p
                    onClick={() => {
                        setShowPage(true)
                    }}
                    className='cursor-pointer hover:underline'>HOME</p>
                <p
                    onClick={() => {
                        setShowPage(false)
                    }}
                    className='cursor-pointer hover:underline'>CART</p>
            </div>
            <button className='bg-blue-950 px-6 py-2.5 active:scale-97 rounded'>Create User</button>
        </div>
    )
}

export default Nav