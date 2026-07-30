import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../features/AuthSlice'
import { useNavigate } from 'react-router'


const useAuthHooks = () => {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    // let { user } = useSelector((store) => store.auth)
    const [registeredUser, setRegisteredUser] = useState(JSON.parse(localStorage.getItem('registeredUser')) || [])
    let { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onChange' })

    function registerSubmit(data) {
        let newUser = [...registeredUser, data]
        setRegisteredUser(newUser)
        localStorage.setItem('registeredUser', JSON.stringify(newUser))
        reset()
    }
    function loginSubmit(data) {
        let isAuthenticated = registeredUser.find((user) => {
            return user.email === data.email && user.password === data.password
        })
        if (!isAuthenticated) {
            alert('Invalid or Not registered')
            return
        }
        
        dispatch(setUser(data))
        localStorage.setItem('logedInUser',JSON.stringify(data))
        navigate('/home')
        reset()


    }
    return {
        register,
        handleSubmit,
        reset,
        errors,
        registerSubmit,
        loginSubmit
    }
}

export default useAuthHooks