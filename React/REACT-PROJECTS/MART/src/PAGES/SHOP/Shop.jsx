import React, { useContext } from 'react'
import SearchBarStrip from './Components/SearchBarStrip'
import { MyStore } from '../../Context/MyContext'
import ProductCard from './Components/ProductCard'
import { Outlet, useLocation } from 'react-router'
import { useEffect, useMemo } from 'react'

const Shop = () => {
    let { filterData, setFilterData, productsData } = useContext(MyStore)
    let location = useLocation()
    let isProductDetail = location.pathname.includes('/product/')
    
    // Read what view user wants from navigation state
    let viewMode = location.state?.viewMode // 'newArrivals' | 'topRated' | null

    // Derive live from productsData so "added" state stays in sync
    let newArrivals = useMemo(() => {
        return [...productsData]
            .sort((a, b) => new Date(b.meta?.createdAt || 0) - new Date(a.meta?.createdAt || 0))
            .slice(0, 5)
    }, [productsData])

    let topRateProduct = useMemo(() => {
        return [...productsData]
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 5)
    }, [productsData])

    return (
        <div>
            {isProductDetail ? (
                <div className='bg-black px-[10vw] pt-[2vw] mt-10'>
                    <Outlet />
                </div>
            ) : (
                <div className='bg-black px-[10vw] pt-[2vw]'>
                    <div className='mt-15'>
                        <h1 className='text-white text-[2.5rem] font-[500]'>All Products</h1>
                        <p className='text-[#555555] text-[15px] font-medium'>
                            {productsData.length} products found
                        </p>
                    </div>
                    <SearchBarStrip />

                    {viewMode === 'newArrivals' && (
                        <div className='mt-6'>
                            <h2 className='text-white text-[18px] font-[600] mb-3'>New Arrivals</h2>
                            <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
                                {newArrivals.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                            <div className='border-t border-neutral-800 my-6' />
                        </div>
                    )}

                    {viewMode === 'topRated' && (
                        <div className='mt-6'>
                            <h2 className='text-white text-[18px] font-[600] mb-3'>Top Rated</h2>
                            <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
                                {topRateProduct.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                            <div className='border-t border-neutral-800 my-6' />
                        </div>
                    )}

                    <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
                        {filterData.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Shop