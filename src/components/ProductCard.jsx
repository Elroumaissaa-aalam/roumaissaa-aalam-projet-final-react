import React from 'react';

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    console.log(`Added ${product.name} to cart`);

  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm p-4 flex flex-col items-center text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4"
      />
      <div className="mb-auto">
        <h3 className="font-semibold text-gray-800 text-lg">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.details}</p>
        <p className="text-gray-700 font-bold mb-4">${product.price ? product.price.toFixed(2) : 'N/A'}</p>
      </div>
      <button
        className="mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard; 