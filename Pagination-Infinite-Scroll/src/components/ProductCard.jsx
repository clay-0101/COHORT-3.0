const ProductCard = ({ product }) => {
  return (
    <div className="bg-black text-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden border">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <p className="text-sm text-gray-500 capitalize">
          {product.category}
        </p>

        <h2 className="text-lg font-semibold mt-1 line-clamp-1">
          {product.title}
        </h2>

        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>

          <span className="text-yellow-500">
            ⭐ {product.rating}
          </span>
        </div>

        <p
          className={`mt-3 text-sm font-medium ${
            product.stock > 0
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;