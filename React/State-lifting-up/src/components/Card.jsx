import React from 'react'

const Card = ({data,deleteCard,idx}) => {
  return (
    <div className='bg-black text-white flex flex-col gap-[10px] w-[15vw] p-3.5 rounded mt-2.5'>
        <img className='h-[18vw] w-full object-cover rounded' src={data.url} alt="img here" />
        <div>
            <p className='text-[15px]'>Name - {data.name}</p>
            <p className='text-[15px]'>Email - {data.email}</p>
        </div>
        <button
        onClick={()=>{
            deleteCard(idx)
        }}
         className='bg-red-600 rounded active:scale-97'>Delete</button>
    </div>
  )
}

export default Card