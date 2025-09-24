import React from 'react';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  description,
  price,
  onAddToCart,
}) => {
  return (
    <div className="w-full max-w-sm md:w-80 lg:w-96 mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src={imageUrl}
          alt={`Image of ${title}`}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 truncate mb-1">
          {title}
        </h3>
         <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-indigo-600">
            ${price.toFixed(2)}
          </span>
         </div>

        <button
          onClick={onAddToCart}
          className="w-full px-4 py-2 text-white font-medium bg-indigo-600 rounded-lg shadow-md transition-colors duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;