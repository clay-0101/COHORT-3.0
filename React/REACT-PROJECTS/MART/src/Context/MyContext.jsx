import { createContext } from "react";
import { useState } from "react";

import axios from "axios";
import { useEffect } from "react";



export let MyStore = createContext();

export let ContextProvider = ({ children }) => {
    // STORE ALL REGISTERED DATA
    const [userData, setUserData] = useState(() => {
        return JSON.parse(localStorage.getItem('registeredUser')) || []
    })
    // STORE THE WHICH USER PROFILE IS LOGED IN
    const [profile, setProfile] = useState(() => {
        return JSON.parse(localStorage.getItem('userProfile')) || null
    })
    //Hide or Unhide the cart
    const [cartToggle, setCartToggle] = useState(false)

    // fetch Data from api


    const [apiData, setapiData] = useState([])
     const [productsData, setProductsData] = useState(JSON.parse(localStorage.getItem('savedProducts')) || [])

    async function ProductData() {
        try {
            let { data } = await axios.get("https://dummyjson.com/products?limit=0")
            let addPropertyData =  data.products.map((item)=> ({...item , added : true}))

            setapiData(addPropertyData)

            if(!localStorage.getItem('savedProducts')){
                setProductsData(addPropertyData)
            }
        } catch (error) {
            console.log('error -> ', error)
        }
    }
    useEffect(() => {
        ProductData()
    }, [])

   


    // catergory map
    const categoryMap = {
        Electronics: ["smartphones", "laptops", "tablets", "mobile-accessories"],
        Clothing: ["mens-shirts", "mens-shoes", "tops", "womens-dresses", "womens-shoes"],
        Furniture: ["furniture", "home-decoration"],
        Home: ["kitchen-accessories", "groceries", "skin-care"],
        Sports: ["sports-accessories", "motorcycle", "vehicle"],
        Accessories: ["sunglasses", "womens-bags", "womens-jewellery", "mens-watches", "womens-watches", "fragrances", "beauty"],
    };
    // FilteredData Accoring userInput
    const [filterData, setFilterData] = useState([])
    useEffect(() => {
        setFilterData(productsData)
    }, [productsData])

    //  For Cart
    const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cartItems')) || [])

     const [productQty, setProductQty] = useState(1)

    return <MyStore.Provider value={{ userData, setUserData, profile, setProfile, cartToggle, setCartToggle,setProductsData, productsData, categoryMap, filterData, setFilterData, cartData, setCartData }}>{children}</MyStore.Provider>
}