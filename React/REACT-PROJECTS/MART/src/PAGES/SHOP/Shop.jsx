import React, { useContext } from 'react'
import SearchBarStrip from './Components/SearchBarStrip'
import { MyStore } from '../../Context/MyContext'
import ProductCard from './Components/ProductCard'

const Shop = () => {
    let { filterData } = useContext(MyStore)
    return (
        <div className='bg-black px-[10vw] pt-[2vw]'>
            <div className='mt-15 '>
                <h1 className='text-white text-[2.5rem] font-[500]'>All Products</h1>
                <p className='text-[#555555] text-[15px] font-medium'>50 products found</p>
            </div>
            <SearchBarStrip />
            <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
                {
                    filterData.map((product) => {
                        return <ProductCard key={product.id} product={product} />
                    })
                }
            </div>
        </div>
    )
}

export default Shop