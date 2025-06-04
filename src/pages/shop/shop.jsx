import React, { useState, useMemo } from 'react';
import ProductCard from '../../components/ProductCard';
import imag from "../../assets/image/shopi2.webp"
import imag1 from "../../assets/image/shopy3.webp"
import imag2 from "../../assets/image/shopy4.webp"
import imag3 from "../../assets/image/shopy5.webp"
import shop from "../../assets/image/shopy5.webp"
import banner from "../../assets/image/banner.webp"


const dummyProducts = [
  {
    id: 1,
    name: 'Boxy3 T-Shirt with Roll Sleeve',
    details: 'S',
    price: 20.0,
    image: imag,
  },
  {
    id: 2,
    name: 'Another Awesome T-Shirt',
    details: 'M',
    price: 25.0,
    image: imag1,
  },
  {
    id: 3,
    name: 'Cool Graphic Tee',
    details: 'L',
    price: 30.0,
    image: imag2,
  },
  {
    id: 4,
    name: 'Simple V-Neck',
    details: 'S',
    price: 18.0,
    image: imag3,
  },
{
      id:5 ,
    name: 'Simple V-Neck',
    details: 'S',
    price: 28.0,
    image: imag2,
},
{
      id:6 ,
    name: 'Simple V-Neck',
    details: 'S',
    price: 15.0,
    image: imag3,
}
];

const ShopPage = () => {
  const [selectedPriceFilter, setSelectedPriceFilter] = useState('all');
  const [selectedSizeFilter, setSelectedSizeFilter] = useState('all');

  const handlePriceFilter = (filterCriteria) => {
    setSelectedPriceFilter(filterCriteria);
  };

  const handleSizeFilter = (filterCriteria) => {
    setSelectedSizeFilter(filterCriteria);
  };

  const filteredProducts = useMemo(() => {
    return dummyProducts.filter(product => {
      const priceMatch = selectedPriceFilter === 'all' ||
                         (selectedPriceFilter === 'under25' && product.price < 25) ||
                         (selectedPriceFilter === 'over25' && product.price >= 25);

      const sizeMatch = selectedSizeFilter === 'all' ||
                        (product.details && product.details.includes(` ${dummyProducts.details} `)); 

      return priceMatch && sizeMatch;
    });
  }, [selectedPriceFilter, selectedSizeFilter, dummyProducts]); 

  return (
    <div className="max-w-6xl mx-auto px-4 py-10  absolute left-[41.2vh]">
      <img src={banner} alt="" />
      <h2 className="text-center font-semibold text-lg mb-8 uppercase text-gray-700">
        Our Products
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
      
        <div className="w-full md:w-1/4">
       
          <h3 className="font-semibold text-gray-800 mb-4">Filter by Price</h3>
          <button
            className={`block w-full text-left px-4 py-2 mb-2 border rounded ${selectedPriceFilter === 'all' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
            onClick={() => handlePriceFilter('all')}
          >
            All Prices
          </button>
          <button
            className={`block w-full text-left px-4 py-2 mb-2 border rounded ${selectedPriceFilter === 'under25' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
            onClick={() => handlePriceFilter('under25')}
          >
            Under $25
          </button>
          <button
            className={`block w-full text-left px-4 py-2 mb-2 border rounded ${selectedPriceFilter === 'over25' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
            onClick={() => handlePriceFilter('over25')}
          >
            $25 and Over
          </button>

        
          <h3 className="font-semibold text-gray-800 mb-4 mt-6">Filter by Size</h3>
          <button
            className={`block w-full text-left px-4 py-2 mb-2 border rounded ${selectedSizeFilter === 'all' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
            onClick={() => handleSizeFilter('all')}
          >
            All Sizes
          </button>
          <button
            className={`block w-full text-left px-4 py-2 mb-2 border rounded ${selectedSizeFilter === 'S' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
            onClick={() => handleSizeFilter('S')}
          >
            S
          </button>
          <button
            className={`block w-full text-left px-4 py-2 mb-2 border rounded ${selectedSizeFilter === 'M' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
            onClick={() => handleSizeFilter('M')}
          >
            M
          </button>
          <button
            className={`block w-full text-left px-4 py-2 mb-2 border rounded ${selectedSizeFilter === 'L' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
            onClick={() => handleSizeFilter('L')}
          >
            L
          </button>
          
        </div>

       
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;