import React from 'react'
import { Trash2, Minus, Plus } from 'lucide-react'

const CartCard = ({product}) => {
    return (
        <div className="flex w-full max-w-[500px] items-center gap-4 border border-stone-200 bg-[#FBFAF7] p-3 rounded-[2px]">
            {/* Image */}
            <div className="h-24 w-24 shrink-0 overflow-hidden bg-stone-100 rounded-[2px]">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain p-2"
                />
            </div>

            {/* Details */}
            <div className="flex flex-1 flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.12em] text-stone-500">
                    {product.category}
                </span>

                <h3 className="line-clamp-2 font-serif text-[15px] leading-snug text-stone-900">
                    {product.title}
                </h3>

                <span className="text-[13px] text-stone-500">
                    Price: ${product.price?.toFixed(2)}
                </span>

                {/* Quantity (UI only) */}
                <div className="mt-1 flex items-center gap-2">
                    <button className="flex h-6 w-6 items-center justify-center border border-stone-300 text-stone-600">
                        <Minus size={12} />
                    </button>
                    <span className="w-6 text-center text-[13px] text-stone-900">
                        {product.quantity || 1}
                    </span>
                    <button className="flex h-6 w-6 items-center justify-center border border-stone-300 text-stone-600">
                        <Plus size={12} />
                    </button>
                </div>
            </div>

            {/* Right side: subtotal + remove */}
            <div className="flex h-full flex-col items-end justify-between">
                <button aria-label="Remove item" className="text-stone-400 hover:text-rose-600">
                    <Trash2 size={16} />
                </button>
                <span className="font-serif text-base text-stone-900">
                    ${((product.price || 0) * (product.quantity || 1)).toFixed(2)}
                </span>
            </div>
        </div>
    )
}

export default CartCard