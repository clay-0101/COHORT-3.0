
import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export let MyStore = createContext();

export let ContextProvider = ({ children }) => {
    // STORE ALL REGISTERED DATA
    const [userData, setUserData] = useState(() => {
        return JSON.parse(localStorage.getItem('registeredUser')) || []
    })

    // STORE WHICH USER PROFILE IS LOGGED IN
    const [profile, setProfile] = useState(() => {
        return JSON.parse(localStorage.getItem('userProfile')) || null
    })

    // Hide or Unhide the cart
    const [cartToggle, setCartToggle] = useState(false)

    // fetch Data from api
    const [apiData, setapiData] = useState([])

    const [productsData, _setProductsData] = useState([])
    const [cartData, _setCartData] = useState([])

    async function ProductData() {
        try {
            let { data } = await axios.get("https://dummyjson.com/products?limit=0")
            let addPropertyData = data.products.map((item) => ({ ...item, added: true }))
            setapiData(addPropertyData)
        } catch (error) {
            console.log('error -> ', error)
        }
    }
    useEffect(() => {
        ProductData()
    }, [])

    const findUserIndex = (users, currentProfile) => {
        if (!currentProfile) return -1
        return users.findIndex((u) => u.email === currentProfile.email)
    }

    const updateUserField = (field, value) => {
        setUserData((prevUsers) => {
            const users = [...prevUsers]
            const idx = findUserIndex(users, profile)

            if (idx === -1) return prevUsers // no logged-in user, nothing to update

            users[idx] = { ...users[idx], [field]: value }
            localStorage.setItem('registeredUser', JSON.stringify(users))
            return users
        })
    }

    const setCartData = (valueOrUpdater) => {
        _setCartData((prev) => {
            const newValue = typeof valueOrUpdater === 'function'
                ? valueOrUpdater(prev)
                : valueOrUpdater

            updateUserField('cart', newValue)
            return newValue
        })
    }

    const setProductsData = (valueOrUpdater) => {
        _setProductsData((prev) => {
            const newValue = typeof valueOrUpdater === 'function'
                ? valueOrUpdater(prev)
                : valueOrUpdater

            updateUserField('products', newValue)
            return newValue
        })
    }

    useEffect(() => {
        if (!profile) {
            _setCartData([])
            _setProductsData([])
            return
        }

        const idx = findUserIndex(userData, profile)

        if (idx !== -1) {
            const user = userData[idx]
            _setCartData(user.cart || [])
            _setProductsData(user.products && user.products.length ? user.products : apiData)
        } else {
            _setCartData([])
            _setProductsData(apiData)
        }
    }, [profile, apiData])

    // category map
    const categoryMap = {
        Electronics: ["smartphones", "laptops", "tablets", "mobile-accessories"],
        Clothing: ["mens-shirts", "mens-shoes", "tops", "womens-dresses", "womens-shoes"],
        Furniture: ["furniture", "home-decoration"],
        Home: ["kitchen-accessories", "groceries", "skin-care"],
        Sports: ["sports-accessories", "motorcycle", "vehicle"],
        Accessories: ["sunglasses", "womens-bags", "womens-jewellery", "mens-watches", "womens-watches", "fragrances", "beauty"],
    };

    // For Search Strip
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('All Categories');
    const [selectedFeature, setSelectedFeature] = useState('Featured');

    // FilteredData according to userInput
    const [filterData, setFilterData] = useState([])
    useEffect(() => {
        setFilterData(productsData)
    }, [productsData])

    const [productQty, setProductQty] = useState(1)

    return (
        <MyStore.Provider value={{
            userData, setUserData,
            profile, setProfile,
            cartToggle, setCartToggle,
            setProductsData, productsData,
            categoryMap,
            filterData, setFilterData,
            cartData, setCartData,
            searchTerm, setSearchTerm,
            category, setCategory,
            selectedFeature, setSelectedFeature,
            productQty, setProductQty
        }}>
            {children}
        </MyStore.Provider>
    )
}