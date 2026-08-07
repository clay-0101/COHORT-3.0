import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import ProductCard from './components/ProductCard'
import { getApiData } from './API/productApi'
import {keepPreviousData, useQuery} from '@tanstack/react-query'

const Pagination = () => {
    
    const [page, setPage] = useState(0)
    let limit = 10
    

  // WIHOUT TANSTACK QUERY   
    // async function getApiData() {
    //     try {
    //         console.log('api calling...')
    //         let res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${limit * page}`)
    //         setData(res.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     getApiData()
    // }, [page])


    let {data, ispending, error, isPlaceholderData} = useQuery({
        queryKey : ['products',page],
        queryFn : () => getApiData(page, limit),
        placeholderData : keepPreviousData
    })

    if(ispending) return 'Loading...'
    if(error) return 'Something Went Wrong...'

    let totalPage = Math.ceil(data?.total / limit)
    console.log(isPlaceholderData)

    return (
        <div className='bg-[#4b4b4b]'>
            <div
            style={{opacity : isPlaceholderData ? '0.3' : '1'}}
             className=" max-w-screen mx-auto px-4 py-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data?.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className='flex justify-center items-center gap-10 p-5'>
                <button 
                disabled={page === 0}
                onClick={()=> setPage(page-1)}
                className='bg-red-500 text-white rounded px-5 py-2 active:scale-95'>Prev</button>
                <p>{`${page+1} of ${totalPage}`}</p>
                <button
                disabled={page >= totalPage-1}
                onClick={()=> setPage(page+1)}
                 className='bg-amber-500 text-white rounded px-5 py-2 active:scale-95'>Next</button>
            </div>
        </div>
    )
}

export default Pagination