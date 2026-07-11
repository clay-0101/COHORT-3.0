import React from 'react'

const Card = ({val}) => {
    return (
        <div className='h-[24vw] w-[14vw] border p-2 rounded bg-blue flex flex-col gap-2' >
            <img className='h-[65%] w-full object-cover rounded' 
            src={val.url} alt="img" />
            <div>
                <h1>{val.name}</h1>
                <p>{val.email}</p>
                <p>{val.phone}</p>
            </div>
            <div className='flex gap-4'>
                <button className='bg-blue-600 px-4 py-1 rounded active:scale-97'>Edit</button>
                <button className='bg-red-500 px-4 py-1 active:scale-97 rounded'>Remove</button>
            </div>

        </div>
    )
}

export default Card