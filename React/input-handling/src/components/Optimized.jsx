import React from 'react'
import { useState } from 'react'

const Optimized = () => {
    const [formData, setFormData] = useState({})

    function renderData(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className='p-5 flex flex-col w-[30vw] gap-5'>
            <input
                name='name'
                onChange={renderData}
                className='border-2 border-black'
                type="text" placeholder='name' />

            <input
                name='email'
                onChange={renderData}
                className='border-2 border-black'
                type="text" placeholder='email' />

            <input
                name='password'
                onChange={renderData}
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

export default Optimized