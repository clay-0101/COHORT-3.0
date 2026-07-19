import { createContext } from "react";
import { useState } from "react";


export let MyStore = createContext();

export let ContextProvider = ({ children }) => {
    // STORE ALL REGISTERED DATA
    const [userData, setUserData] = useState(()=>{
        return JSON.parse(localStorage.getItem('registeredUser')) || []
    })
    // STORE THE WHICH USER PROFILE IS LOGED IN
    const [profile, setProfile] = useState(()=>{
        return JSON.parse(localStorage.getItem('userProfile')) || null
    })

    const [cartToggle, setCartToggle] = useState(false)

    return <MyStore.Provider value={{ userData, setUserData , profile, setProfile, cartToggle, setCartToggle}}>{children}</MyStore.Provider>
}