import { useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import { useState } from "react"


const useAuth = () => {
    const [registertedUser, setRegistertedUser] = useState(JSON.parse(localStorage.getItem('registeredUser')) || [])
    let navigate = useNavigate()
    let { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onChange' })

    let registerSubmit = (data) => {
        let newUser = [...registertedUser , data]
        setRegistertedUser(newUser)
        localStorage.setItem('registeredUser',JSON.stringify(newUser))
        reset()
    }
    return {
        navigate,
        register,
        handleSubmit,
        reset,
        errors,
        registerSubmit
    }
}

export default useAuth;