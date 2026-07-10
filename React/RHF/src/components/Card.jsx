import React from 'react'

const Card = () => {
    return (
        <div className='h-[24vw] w-[14vw] border p-2 rounded bg-blue flex flex-col gap-2' >
            <img className='h-[65%] w-full object-cover rounded' src="https://plus.unsplash.com/premium_photo-1732668021815-9129fdb798d1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
            <div>
                <h1>Name</h1>
                <p>Email</p>
                <p>Phone</p>
            </div>
            <div className='flex gap-4'>
                <button className='bg-blue-600 px-4 py-1 rounded active:scale-97'>Edit</button>
                <button className='bg-red-500 px-4 py-1 active:scale-97 rounded'>Remove</button>
            </div>

        </div>
    )
}

export default Card