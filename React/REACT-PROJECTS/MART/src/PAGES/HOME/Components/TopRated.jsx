import React, { useContext } from 'react'
import { Star, ArrowRight, ShoppingBag, Cookie, Watch, Monitor, Speaker, Camera } from 'lucide-react'
import { MyStore } from '../../../Context/MyContext'
import TopProducts from './TopProducts'
import { useNavigate } from 'react-router'

const TopRated = () => {
   let navigate = useNavigate()
    let { productsData } = useContext(MyStore)

    let TopRatedProducts = [...productsData]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5)

function seeAllHandler() {
    navigate('/shop', { state: { viewMode: 'topRated' } })
}
    return (
        <div className='bg-white rounded-2xl p-6'>

            <div className='flex justify-between items-center mb-4'>
                <h3 className='flex items-center gap-2 font-[700] text-neutral-900 text-[15px]'>
                    <Star size={16} className='text-[#ffb020]' fill="#ffb020" /> Top Rated
                </h3>
                <p
                onClick={()=>seeAllHandler()}
                 className='text-[#8bb800] text-[13px] font-[600]  cursor-pointer flex items-center gap-1  transition-all duration-300 active:scale-98 hover:scale-105 '>See all <ArrowRight size={13} /></p>
            </div>

            <div className='flex flex-col gap-2'>
                {TopRatedProducts.map((item) => {
                    return <TopProducts key={item.id} item={item} />
                })}
            </div>
        </div>
    )
}

export default TopRated