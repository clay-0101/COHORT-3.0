import { createContext } from "react";
import { useState } from "react";

export let MyStore = createContext()

export let ContextProvider = ({ children }) => {

    let permanentData = [
        {
            id: 1,
            name: "Classic Margherita",
            chefName: "Chef Mario",
            price: 24,
            prepTime: "30",
            rating: 4.8,
            imageUrl:
                "https://plus.unsplash.com/premium_photo-1723734005340-9ca5218a3311?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:
                "Hand-stretched sourdough base topped with mozzarella and fresh basil.",
        },
        {
            id: 2,
            name: "Salmon Zen Bowl",
            chefName: "Chef Elena",
            price: 32,
            prepTime: "25",
            rating: 4.9,
            imageUrl:
                "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60",
            description:
                "Healthy salmon bowl with avocado, quinoa and vegetables.",
        },
        {
            id: 3,
            name: "Prime Wagyu Steak",
            chefName: "Chef Giovanni",
            price: 65,
            prepTime: "45",
            rating: 5,
            imageUrl:
                "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=60",
            description:
                "Premium A5 Wagyu served with truffle mashed potatoes.",
        },
    ]
    const [recipeData, setRecipeData] = useState(() => {

        return JSON.parse(localStorage.getItem('AllRecipe')) || permanentData
    })

    const [onHome, setOnHome] = useState(true)
    const [cartData, setCartData] = useState([])
    const [cartQuantity, setCartQuantity] = useState(0)

    function removeFromCart(id) {
        setCartData((prev) => {
            return prev.filter((item) => {
                return item.id !== id
            })
        })
    }

    return <MyStore.Provider value={{recipeData, setRecipeData, onHome, setOnHome, cartData, setCartData, removeFromCart, cartQuantity, setCartQuantity }}>{children}</MyStore.Provider>
}