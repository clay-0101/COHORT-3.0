import React, { useRef } from 'react'
import { useForm } from "react-hook-form"
import { useState } from 'react'


const Form = ({setFormData,setToggle}) => {
   
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
        } = useForm()

    let inpRef = useRef({})
    console.log('App Rendering...')
        console.log(errors)

    return (
        <div className='flex justify-center items-center h-[40vw]'>
            <form
                ref={inpRef}
                onSubmit={handleSubmit((data)=>{
                    setFormData((prev)=> [...prev, data])
                    setToggle((prev)=> !prev)
                    reset()
                })}
                className='bg-gray-950 flex flex-col gap-4 w-[400px] border-2 border-blue-400 p-5'>
                <input
                    name='name'
                    {...register('name',{
                        required:"Name is Required"
                    })}
                    className='border-2 border-blue-400 rounded px-3.5 py-2' type="text" placeholder='Name' />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>} 
                <input
                    name='email'
                   {...register('email',{
                        required:"email is Required"
                    })}
                    className='border-2 border-blue-400 rounded px-3.5 py-2' type="mail" placeholder='Email' />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                <input
                    name='phone'
                    {...register('phone',{
                        required:"phone is Required"
                    })}
                    className='border-2 border-blue-400 rounded px-3.5 py-2' type="number" placeholder='Phone' />
                    {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                <input
                    name='url'
                    {...register('url',{
                        required:"url is Required"
                    })}
                    className='border-2 border-blue-400 rounded px-3.5 py-2' type="url" placeholder='Image' />
                    {errors.url && <p className='text-red-500'>{errors.url.message}</p>}
                <button
                    className='bg-blue-400 rounded px-3.5 py-1.5 active:scale-98'>Add User</button>
            </form>
        </div>
    )
}

export default Form