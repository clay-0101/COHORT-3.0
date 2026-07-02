import React from 'react'

const Product = ({product,del}) => {

    return (
        <div className=' flex flex-col gap-5 border-2 border-black rounded p-2' >
            <img className='h-[15vw] w-[10vw]' src={product.image} alt="prodcut here" />
            <div>
                <p>Name - {(product.title).substring(0,10)}</p>
                <p>Price - {product.price}$</p>
                <p>Category - {product.category}</p>
            </div>
            <button onClick={()=>{
                del(product.id)
            }} className='bg-red-500 text-white rounded active:scale-97'>Delete</button>
        </div>
    )
}

export default Product