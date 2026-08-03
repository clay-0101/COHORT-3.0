import { useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { setUser } from "../state/addUserSlice"
import searchApi from "../../home/api/searchApi"



const useAuth = () => {
    let dispatch = useDispatch()
    const [registertedUser, setRegistertedUser] = useState(JSON.parse(localStorage.getItem('registeredUser')) || [])
    let navigate = useNavigate()
    let { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onChange' })

    let registerSubmit = (data) => {
        let newUser = [...registertedUser, data]
        setRegistertedUser(newUser)
        localStorage.setItem('registeredUser', JSON.stringify(newUser))
        reset()
    }
    let loginSubmit = (data) => {
        let isUserExist = registertedUser.find((user) => {
            return user.email === data.email && user.password === data.password
        })
        if (!isUserExist) {
            toast.error('Invalid User')
            return
        }
        dispatch(setUser(data))
        navigate('/home')
        reset()
    }
    return {
        navigate,
        register,
        handleSubmit,
        reset,
        errors,
        registerSubmit,
        loginSubmit
    }
}

export default useAuth;