import React from 'react'

const CartCard = () => {
  return (
    <div className="w-full flex items-center gap-4 bg-white rounded-xl shadow-md border border-gray-100 p-3">
      {/* Image */}
      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1548365328-8b849e6c7b4d?w=500&auto=format&fit=crop&q=60"
          alt="Classic Margherita"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-base font-bold text-gray-900 truncate">
            Classic Margherita
          </h2>
          <span className="text-orange-500 font-bold text-sm whitespace-nowrap">
            $24
          </span>
        </div>

        <p className="text-xs text-gray-500 mt-1 truncate">
          Chef Mario • 30 mins
        </p>

        {/* Quantity + Remove */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3 border border-gray-200 rounded-md px-2 py-1">
            <button
              type="button"
              className="text-orange-500 font-bold text-sm w-4 text-center"
            >
              −
            </button>
            <span className="text-sm font-semibold text-gray-800">1</span>
            <button
              type="button"
              className="text-orange-500 font-bold text-sm w-4 text-center"
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="text-xs font-semibold text-red-500 hover:text-red-600 transition-colors"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartCard