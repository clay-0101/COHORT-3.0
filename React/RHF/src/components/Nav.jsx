import React from 'react'

const Nav = ({setToggle}) => {
  return (
    <div className='bg-blue-600 flex justify-between items-center px-5 py-3'>
      <img className="h-10" src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
      <div className='flex gap-[2vw]'>
        <p>HOME</p>
        <p>ABOUT</p>
        <p>PRODUCT</p>
        <p>CONTACT</p>
      </div>
      <button
      onClick={()=>{
        setToggle((prev)=> !prev)
      }}
       className='bg-blue-950 px-6 py-2.5 active:scale-97 rounded'>Create User</button>
    </div>
  )
}

export default Nav