import React from 'react'

const RecipeCard = ({cardData}) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      {/* Image with price badge */}
      <div className="relative h-40 w-full">
        <img
          src={cardData.imageUrl}
          alt="Classic Margherita"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow">
          ${cardData.price}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-gray-900">{cardData.name}</h2>
          <div className="flex items-center gap-1 text-yellow-500 text-sm font-semibold">
            <span>★</span>
            <span>4.8</span>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
          {cardData.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-sm font-semibold text-gray-800">{cardData.chefName}</p>
            <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
              <span>🕐</span>{cardData.prepTime}<span>mins</span>
            </p>
          </div>
          <button
            type="button"
            className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-3.5 py-2 rounded-md transition-colors"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard