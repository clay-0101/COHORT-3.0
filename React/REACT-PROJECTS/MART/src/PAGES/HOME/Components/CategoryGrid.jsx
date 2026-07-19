import React, { useContext } from 'react'
import products from '../../../Context/AllProducts'
import { Laptop, Shirt, Armchair, Home, Dumbbell, Backpack, ArrowRight } from 'lucide-react'
import { MyStore } from '../../../Context/MyContext'

const CategoryGrid = () => {
    let { productsData } = useContext(MyStore)
    const categoryMap = {
        Electronics: ["smartphones", "laptops", "tablets", "mobile-accessories"],
        Clothing: ["mens-shirts", "mens-shoes", "tops", "womens-dresses", "womens-shoes"],
        Furniture: ["furniture", "home-decoration"],
        Home: ["kitchen-accessories", "groceries", "skin-care"],
        Sports: ["sports-accessories", "motorcycle", "vehicle"],
        Accessories: ["sunglasses", "womens-bags", "womens-jewellery", "mens-watches", "womens-watches", "fragrances", "beauty"],
    };

    let subCategoryCount = productsData.reduce((acc, curr)=>{
        let cat = curr.category
        acc[cat] = (acc[cat] || 0) + 1
        return acc
    },{})

    let finalCount = {}
    for(let [mainCat , subCat] of Object.entries(categoryMap)){
        finalCount[mainCat] =  subCat.reduce((acc, curr)=>{
           return acc + (subCategoryCount[curr] || 0) 
        },0)
    }

    return (
        <div className='px-[10vw] pt-[2.5vw]'>

            <div className='flex justify-between items-center mb-4'>
                <h2 className='text-white text-[1.3vw] font-[700]'>Shop by Category</h2>
                <p className='text-[#c8f400] text-[14px] font-[600] flex items-center gap-1'>View All <ArrowRight size={14} /></p>
            </div>

            <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-2 '>

                <div className='bg-white rounded-2xl p-6 text-center relative hover:-translate-y-1 transition-all duration-200 ease'>
                    <Laptop size={26} className='mx-auto mb-2 text-neutral-800' />
                    <p className='font-[700] text-neutral-900 text-[15px]'>Electronics</p>
                    <p className='text-neutral-500 text-[12px]'>{finalCount['Electronics']} items</p>
                </div>

                <div className='bg-white rounded-2xl p-6 text-center relative hover:-translate-y-1 transition-all duration-200 ease'>
                    <Shirt size={26} className='mx-auto mb-2 text-neutral-800' />
                    <p className='font-[700] text-neutral-900 text-[15px]'>Clothing</p>
                    <p className='text-neutral-500 text-[12px]'>{finalCount['Clothing']} items</p>
                </div>

                <div className='bg-white rounded-2xl p-6 text-center relative hover:-translate-y-1 transition-all duration-200 ease'>
                    <Armchair size={26} className='mx-auto mb-2 text-neutral-800' />
                    <p className='font-[700] text-neutral-900 text-[15px]'>Furniture</p>
                    <p className='text-neutral-500 text-[12px]'>{finalCount['Furniture']} items</p>
                </div>

                <div className='bg-white rounded-2xl p-6 text-center relative hover:-translate-y-1 transition-all duration-200 ease'>
                    <Home size={26} className='mx-auto mb-2 text-neutral-800' />
                    <p className='font-[700] text-neutral-900 text-[15px]'>Home</p>
                    <p className='text-neutral-500 text-[12px]'>{finalCount['Home']} items</p>
                </div>

                <div className='bg-white rounded-2xl p-6 text-center relative hover:-translate-y-1 transition-all duration-200 ease'>
                    <Dumbbell size={26} className='mx-auto mb-2 text-neutral-800' />
                    <p className='font-[700] text-neutral-900 text-[15px]'>Sports</p>
                    <p className='text-neutral-500 text-[12px]'>{finalCount['Sports']} items</p>
                </div>

                <div className='bg-white rounded-2xl p-6 text-center relative hover:-translate-y-1 transition-all duration-200 ease'>
                    <Backpack size={26} className='mx-auto mb-2 text-neutral-800' />
                    <p className='font-[700] text-neutral-900 text-[15px]'>Accessories</p>
                    <p className='text-neutral-500 text-[12px]'>{finalCount['Accessories']} items</p>
                </div>

            </div>
        </div>
    )
}

export default CategoryGrid