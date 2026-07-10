import React from 'react'
import { useForm } from "react-hook-form"
import { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({})
    function getData(e){
         setFormData({...formData, [e.target.name]:e.target.value})
         console.log(formData)
    }
    return (
        <div className='flex justify-center items-center h-[40vw]'>
            <form 
            // onSubmit={(e)=>{
            //     e.preventDefault()
            //   console.log(formData)  
            // }}
            className='bg-gray-950 flex flex-col gap-4 w-[400px] border-2 border-blue-400 p-5'>
                <input
                name='name'
                onChange={getData}
                className='border-2 border-blue-400 rounded px-3.5 py-2' type="text" placeholder='Name' />
                <input
                name='email'
                onChange={getData}
                className='border-2 border-blue-400 rounded px-3.5 py-2' type="mail" placeholder='Email' />
                <input 
                name='phone'
                onChange={getData}
                className='border-2 border-blue-400 rounded px-3.5 py-2' type="number" placeholder='Phone' />
                <input 
                name='url'
                onChange={getData}
                className='border-2 border-blue-400 rounded px-3.5 py-2' type="url" placeholder='Image' />
                <button 
                className='bg-blue-400 rounded px-3.5 py-1.5 active:scale-98'>Add User</button>
            </form>
        </div>
    )
}

export default Form