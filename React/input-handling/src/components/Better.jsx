import React from 'react'
import { useState } from 'react'

const Better = () => {
  const [formData, setFormData] = useState({
    name : '',
    email : '',
    password: ''
  })
  return (
    <div className='p-5 flex flex-col w-[30vw] gap-5'>
      <input
      onChange={(e)=>{setFormData({...formData, name : e.target.value})}}
        className='border-2 border-black'
        type="text" placeholder='name' />

      <input
        onChange={(e)=>{setFormData({...formData, email : e.target.value})}}
        className='border-2 border-black'
        type="text" placeholder='email' />

      <input
        onChange={(e)=>{setFormData({...formData, password : e.target.value})}}
        className='border-2 border-black'
        type="text" placeholder='password' />


      <div>
        <p>Name - {formData.name}</p>
        <p>Email - {formData.email}</p>
        <p>Password - {formData.password}</p>
      </div>
    </div>
  )
}

export default Better