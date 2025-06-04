import React, { useState } from 'react';
import test from "../../assets/image/banner-02.jpg"

const Achat = () => {
  
  const [quantity, setQuantity] = useState(1);

  const unitPrice = 20.0;
  const total = (unitPrice * quantity).toFixed(2);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
    return (
        <>
          <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-center font-semibold text-lg mb-8 uppercase text-gray-700">
        Shopping Cart
      </h2>

      <div className="overflow-x-auto border">
        <table className="min-w-full text-left">
          <thead className="bg-gray-50">
            <tr className="text-gray-600 uppercase text-sm tracking-wider">
              <th className="px-6 py-3">Product Name</th>
              <th className="px-6 py-3">Unit Price</th>
              <th className="px-6 py-3">Quantity</th>
              <th className="px-6 py-3">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-6 py-4 flex items-center gap-4">
                <img
                  src={test}
                  alt="product"
                  className="w-20 h-24 object-cover border"
                />
                <div>
                  <div className="font-medium text-gray-800">
                    Boxy3 T-Shirt with Roll Sleeve
                  </div>
                  <div className="text-sm text-gray-500">S / Gray</div>
                </div>
              </td>

              <td className="px-6 py-4 text-gray-700">${unitPrice.toFixed(2)}</td>

              <td className="px-6 py-4">
                <div className="flex items-center border rounded overflow-hidden w-fit">
                  <button
                    className="px-3 py-1 bg-gray-200 text-lg"
                    onClick={decrease}
                  >
                    −
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="w-12 text-center border-x"
                  />
                  <button
                    className="px-3 py-1 bg-gray-200 text-lg"
                    onClick={increase}
                  >
                    +
                  </button>
                </div>
              </td>

              <td className="px-6 py-4 text-gray-700">${total}</td>
            </tr>
          </tbody>
        </table>
      </div>

    
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
        <input
          type="text"
          placeholder="Coupon Code"
          className="border px-4 py-2 rounded w-full sm:w-64"
        />
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
          UPDATE CART
        </button>
      </div>
    </div>   
        </>
    );
};

export default Achat;




// import React from 'react';

// const Achat = ({ product, onClose }) => {
//   if (!product) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//       <div className="bg-white rounded-xl p-6 w-[90%] max-w-xl shadow-xl relative">
//         <button
//           className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
//           onClick={onClose}
//         >
//           ×
//         </button>

//         <h2 className="text-lg font-semibold text-center mb-4 text-gray-700">
//           Product added to your cart
//         </h2>

//         <div className="flex items-center gap-4">
//           <img
//             src={product.image}
//             alt="product"
//             className="w-20 h-24 object-cover border"
//           />
//           <div>
//             <div className="font-medium text-gray-800">{product.name}</div>
//             <div className="text-sm text-gray-500">{product.details}</div>
//             <div className="text-gray-700 font-semibold">
//               ${product.price.toFixed(2)}
//             </div>
//           </div>
//         </div>

//         <div className="mt-6 flex justify-end">
//           <button
//             className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800"
//             onClick={onClose}
//           >
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Achat;