import React, { useContext } from 'react'
import { ShoppingBag } from 'lucide-react'
import { useNavigate } from 'react-router'
import { MyStore } from '../../../Context/MyContext'
import { toast } from 'react-toastify'
const TopProducts = ({ item }) => {
    let navigate = useNavigate()
    let { setCartToggle, cartData, setCartData, setFilterData, productsData, setProductsData, productQty, setProductQty } = useContext(MyStore)

    function addToCart() {
        let upDataCartData = [...cartData, { ...item, quantity: (item.quantity || 0) + 1 }]
        let updateAllData = productsData.map((val) => {
            return val.id === item.id ? { ...val, added: false } : val
        })
        setProductsData(updateAllData)
        setCartData(upDataCartData)
        setCartToggle(true)

        localStorage.setItem('savedProducts', JSON.stringify(updateAllData))
        localStorage.setItem('cartItems', JSON.stringify(upDataCartData))
        toast.success('Added to Cart🛒')
    }
    return (
        <div
            onClick={() => navigate(`/shop/product/${item.id}`)}
            className='flex justify-between items-center border-[0.1px] border-neutral-100 rounded-xl px-3 py-2 transition-all duration-300 hover:scale-105'>
            <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center'>
                    <img src={item.images[0]} alt="" />
                </div>
                <span className='text-[#8bb800] font-[600] text-[14px]'>$599.99</span>
            </div>
            {item.added ? <div className='w-8 h-8 bg-[#c8f40026] rounded-lg flex items-center justify-center text-[#8bb800] hover:bg-[#c8f400] hover:text-black cursor-pointer'>
                <ShoppingBag
                    onClick={() => {
                        addToCart()
                    }}
                    size={15} />
            </div> : <p className="text-green-400 text-[14px] rounded-xl px-3 border-[#02ea0654] bg-[#02ea0620] ">
                Added!
            </p>}
        </div>
    )
}

export default TopProducts