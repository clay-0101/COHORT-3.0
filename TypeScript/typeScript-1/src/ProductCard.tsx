import React from 'react'

type Datatype = {
    id: number,
    category: number,
    description: string,
    image: string,
    price: number,
    rating: {
        rate: number,
        count: number,
    },
    title: string
}

const ProductCard = ({product} : {product : Datatype}) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-64 items-center justify-center bg-gray-50 p-6">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="p-5">
                <h2 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900">
                    {product.title}
                </h2>

                <p className="mb-4 line-clamp-2 text-sm text-gray-500">
                    {product.description}
                </p>

                <div className="mb-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-black">
                        ${product.price}
                    </span>

                    <div className="flex items-center gap-1 text-sm">
                        <span className="text-yellow-500">★</span>
        
                    </div>
                </div>

                <button className="w-full rounded-xl bg-black px-4 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-gray-800">
                    Add to Cart
                </button>
            </div>
        </div>

    )
}

export default ProductCard

