import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import ProductCard from './components/ProductCard'
import { getApiData } from './API/productApi'
import { keepPreviousData, useInfiniteQuery, useQuery } from '@tanstack/react-query'
const InfiniteScroll = () => {

    const [page, setPage] = useState(0)
    let limit = 50

    let { data, ispending, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['products'],
        queryFn: ({ pageParam }) => getApiData(pageParam, limit),
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPage) => {
            console.log(lastPage)
            const nextSkip = lastPage.skip + lastPage.limit
            if (nextSkip < lastPage.total) {
                return nextSkip
            }
            return undefined
        }


    })

    if (ispending) return 'Loading...'
    if (error) return 'Something Went Wrong...'

    let totalPage = Math.ceil(data?.pages[0].total / limit)
    let allProducts = data?.pages.flatMap((val) => val.products)




    return (
        <div className='bg-[#4b4b4b]'>
            <div

                className=" max-w-screen mx-auto px-4 py-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {allProducts?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            {
                hasNextPage ? <div className='flex justify-center items-center gap-10 p-5'>
                    <button
                        onClick={() => fetchNextPage()}
                        className='bg-red-500 text-white rounded px-8 py-2 active:scale-95'>{`${isFetchingNextPage ? 'Loading..' : 'Load More'}`}</button>
                </div> : ''
            }
        </div>
    )
}

export default InfiniteScroll