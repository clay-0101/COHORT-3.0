import React, { useContext } from 'react'
import { Star, ShoppingBag, Heart } from 'lucide-react'
import { Shop } from '../context/MyContext'

const ProductCard = ({ product }) => {
    let {setCartItems,cartItems} = useContext(Shop)
    function isPresetnInData(){
      return  cartItems.find((card)=> card.id === product.id)
    }

    return (
        <div className="group relative flex w-full max-w-[300px] flex-col overflow-hidden rounded-[2px] border border-stone-200 bg-[#FBFAF7] transition-shadow duration-300 hover:shadow-[0_8px_28px_-12px_rgba(30,25,20,0.25)]">
            {/* Image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />

                {/* Category tag */}
                <span className="absolute left-3 top-3 rounded-[2px] bg-stone-800 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white">
                    {product.category}
                </span>

                {/* Save icon (UI only) */}
                <button
                    aria-label="Save item"
                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition-colors hover:bg-white"
                >
                    <Heart size={15} strokeWidth={1.75} className="text-stone-500" />
                </button>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col gap-2 p-4">
                <h3 className="line-clamp-2 min-h-[2.6em] font-serif text-[15px] leading-snug text-stone-900">
                    {product.title}
                </h3>

                <p className="line-clamp-2 text-[12px] leading-relaxed text-stone-500">
                    {product.description}
                </p>

                <div className="flex items-center gap-1.5">
                    <Star size={13} strokeWidth={1.5} className="fill-current text-stone-900" />
                    <span className="text-[11px] tabular-nums text-stone-500">
                        {product.rating?.rate} · {product.rating?.count}
                    </span>
                </div>

                <div className="mt-2 flex items-center justify-between border-t border-stone-200 pt-3">
                    <span className="font-serif text-lg text-stone-900">
                        ${product.price?.toFixed(2)}
                    </span>
                    <button
                        onClick={() => {
                            if (isPresetnInData()) {
                                let addQuantity = cartItems.map((card)=>{
                                    return card.id === product.id ? {...card, quantity:(card.quantity) + 1 } : card
                                })
                                console.log(product.quantity || 1)
                                setCartItems(addQuantity)
                                localStorage.setItem('saved', JSON.stringify(addQuantity))
                            }else{
                                let newUserAdd = [...cartItems,{...product, quantity : 1}]
                                setCartItems(newUserAdd)
                                localStorage.setItem('saved',JSON.stringify(newUserAdd))
                            }

                        }}
                        className="flex items-center gap-1.5 rounded-[2px] bg-stone-800 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.08em] text-white transition-opacity hover:opacity-90 active:opacity-80">
                        <ShoppingBag size={13} strokeWidth={2} />
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard