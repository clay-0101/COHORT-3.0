import { createContext } from "react";
import { useState } from "react";


export let MyStore = createContext();

export let ContextProvider = ({ children }) => {
    const [userData, setUserData] = useState([])

    return <MyStore.Provider value={{userData, setUserData}}>{children}</MyStore.Provider>
}