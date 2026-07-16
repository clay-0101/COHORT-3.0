import CartCard from "./Components/CartCard"
import {CircleX} from "lucide-react"

const CartPage = () => {
  return (
    <div className="h-[90vh] overflow-y-auto w-full bg-[#fdfaf5] px-6 py-10 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
            <p className="text-sm text-gray-500 mt-1 mb-8">
              Review your items before checkout.
            </p>
          </div>
        <CircleX className="cursor-pointer hover:text-orange-600" />
        </div>
        {/* Two column layout */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Left side - Cart Items */}
          <div className="w-full lg:flex-1 space-y-4 max-h-[70vh] overflow-y-auto pr-1">
            <CartCard />
            <CartCard />
            <CartCard />
          </div>

          {/* Right side - Order Summary */}
          <div className="w-full lg:w-80 flex-shrink-0 bg-white rounded-xl shadow-md border border-gray-100 p-5 lg:sticky lg:top-10">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>$121</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Delivery Fee</span>
                <span>$5</span>
              </div>
              <div className="flex justify-between font-bold text-gray-900 text-base pt-2 border-t border-gray-100 mt-2">
                <span>Total</span>
                <span>$126</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-md transition-colors mt-5"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage