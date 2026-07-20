import React, { useContext } from 'react'
import { Zap, ArrowRight, ShoppingBag, Headphones, Pen, Shirt, Image, FlaskConical } from 'lucide-react'
import { MyStore } from '../../../Context/MyContext'
import NewProducts from './NewProducts'

const NewArrivals = () => {
   let {productsData} = useContext(MyStore)

  let newArrival = [...productsData]
  .sort((a, b) => new Date(b.meta.createdAt) - new Date(a.meta.createdAt))
  .slice(0, 5);
  console.log(newArrival)  // sort top 8 new arrivals 

    return (
        <div className='bg-white rounded-2xl p-6'>

            <div className='flex justify-between items-center mb-4'>
                <h3 className='flex items-center gap-2 font-[700] text-neutral-900 text-[15px]'>
                    <Zap size={16} className='text-[#c8f400]' fill="#c8f400" /> New Arrivals
                </h3>
                <p className='text-[#8bb800] text-[13px] font-[600] flex items-center gap-1'>See all <ArrowRight size={13} /></p>
            </div>

            <div className='flex flex-col gap-2'>

                {newArrival.map((item)=>{
                    return <NewProducts key={item.id} item={item}/>
                })}

            </div>
        </div>
    )
}

export default NewArrivals