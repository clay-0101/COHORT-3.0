import { createContext } from "react";
import { useState } from "react";
import products from "./AllProducts";
import axios from "axios";
import { useEffect } from "react";



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
    //Hide or Unhide the cart
    const [cartToggle, setCartToggle] = useState(false)
    
    // fetch Data from api

    const [productsData, setProductsData] = useState([])
    async function ProductData(){
        try{
            let {data} = await axios.get("https://dummyjson.com/products?limit=0")
            setProductsData(data.products)
        }catch(error){
            console.log('error -> ',error)
        }
    }
    useEffect(()=>{
        ProductData()
    }, [])
    


    return <MyStore.Provider value={{ userData, setUserData , profile, setProfile, cartToggle, setCartToggle, productsData}}>{children}</MyStore.Provider>
}