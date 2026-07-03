import React from 'react'
import { useState } from 'react'

const BruteForce = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='p-5 flex flex-col w-[30vw] gap-5'>
            <input
                onChange={(e) => {
                    setName(e.target.value)
                }}
                className='border-2 border-black'
                type="text" placeholder='name' />
            <input
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                className='border-2 border-black'
                type="text" placeholder='email' />
            <input
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                className='border-2 border-black'
                type="text" placeholder='password' />


            <div>
                <p>Name - {name}</p>
                <p>Email - {email}</p>
                <p>Password - {password}</p>
            </div>
        </div>
    )
}

export default BruteForce