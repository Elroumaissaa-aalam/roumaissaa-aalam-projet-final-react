import React, { useEffect, useState } from 'react';
import first from "../../assets/image/item-cart-01.jpg"
import tanya from "../../assets/image/cards1.webp"
import carossel from "../../assets/image/shopy4.webp"
import talta from "../../assets/image/banner-07.jpg"
import lkhamsa from "../../assets/image/cards3.webp"
import rab3a from "../../assets/image/cards4.webp"
import sadsa from "../../assets/image/cards2.webp"
import sab3a from "../../assets/image/cards6.webp"
import tamna from "../../assets/image/shop-item-09.jpg"
import tas3a from "../../assets/image/banner-08.jpg"
import bag from "../../assets/image/blog-01.jpg"
import blog2 from "../../assets/image/blog-02.jpg"
import blog3 from "../../assets/image/blog-03.jpg"
import shopy1 from "../../assets/image/shopi2.webp"
import shopy2 from "../../assets/image/shopy3.webp"
import shopy3 from "../../assets/image/shopy4.webp"
import shopy4 from "../../assets/image/shopy5.webp"
import shopy5 from "../../assets/image/shopy6.webp"
import shopy6 from "../../assets/image/shopy7.webp"
import shopy7 from "../../assets/image/shopy8.webp"
import { Carousel } from 'flowbite';
import { Link } from 'react-router-dom';
import Footer from '../../layouts/footer';




const Home = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2025-12-31T23:59:59') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

const products = [
  { id: 1, name: "Boxy T-Shirt with Roll Sleeve", image: shopy1, price: 20.0, details: "S" },
  { id: 2, name: "Boxy T-Shirt with Roll Sleeve", image: shopy2, price: 20.0, details: "S" },
  { id: 3, name: "Boxy T-Shirt with Roll Sleeve", image: shopy3, price: 20.0, details: "S" },
  { id: 4, name: "Boxy T-Shirt with Roll Sleeve", image: shopy4, price: 20.0, details: "S" },
  { id: 5, name: "Boxy T-Shirt with Roll Sleeve", image: shopy1, price: 20.0, details: "S" },
  { id: 6, name: "Boxy T-Shirt with Roll Sleeve", image: shopy2, price: 20.0, details: "S" },
  { id: 7, name: "Boxy T-Shirt with Roll Sleeve", image: shopy3, price: 20.0, details: "S" },
  { id: 8, name: "Boxy T-Shirt with Roll Sleeve", image: shopy4, price: 20.0, details: "S" },
];
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
    console.log("Added product:", product);
  };



    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const carousell = document.getElementById("default-carousel")
        const carossel = new Carousel(carousell)
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [])
    return (

        <div className='md:w-[79vw] h-[55vh]  absolute left-[41.2vh] '>
            <div className=' flex flex-col gap-10'>




                <div id="default-carousel" className="relative w-full  h-[100vh] bg-[#f6f6f6]" data-carousel="static">

                    <div className="relative h-80 overflow-hidden rounded-lg md:h-full">

                        <div className="duration-300 ease-in-out absolute inset-0 transition-all h-full transform translate-x-0 group" data-carousel-item="active">
                            <img src={carossel} className="flex  h-full w-50  object-cover transition-transform duration-500 group-hover:scale-110 " alt="carousel image 1" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-black animate-pulse   group-hover:scale-105 duration-500">
                                <h2 className="text-2xl md:text-4xl mb-2">Women Collection 2018</h2>
                                <h1 className="text-4xl md:text-6xl font-bold mb-4">New arrivals</h1>
                                <Link to="/Shop" className="px-6 py-3 bg-white text-black text-lg hover:bg-[#e65a46] hover:text-white transition-colors duration-300">Shop Now</Link>
                            </div>
                        </div>

                        <div className="duration-300 ease-in-out absolute inset-0 transition-all transform translate-x-full" data-carousel-item>
                            <img src={tanya} className="absolute block w-[25vw] h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="carousel image 2" />
                        </div>

                        <div className="duration-300 ease-in-out absolute inset-0 transition-all transform translate-x-full" data-carousel-item>
                            <img src={first} className="absolute block w-[25vw] h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="carousel image 3" />
                        </div>
                    </div>

                    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>




                <div className='grid grid-cols-3 p-2'>
                    <Link to={"/Shop"} className=''>
                        <img className='rounded-xl p-3' src={tanya} alt="..." />
                        <button className='relative top-[-10vh] left-[13vh] text-center text-[3vh] px-19 py-2 bg-white/90 hover:bg-[#e65a46] hover:text-white'>dresse</button>
                    </Link>
                    <Link to={"/Shop"}>
                        <img className='rounded-xl p-3' src={talta} alt="..." />
                        <button className='relative top-[-10vh] left-[13vh] text-center text-[3vh] px-19 py-2 bg-white/90 hover:bg-[#e65a46] hover:text-white'>footerwear</button>
                    </Link>
                    <Link to={"/Shop"}>
                        <img className='rounded-xl p-3' src={lkhamsa} alt="..." />
                        <button className='relative top-[-10vh] left-[13vh] text-center text-[3vh] px-19 py-2 bg-white/90 hover:bg-[#e65a46] hover:text-white'>bags</button>
                    </Link>
                    <Link to={"/Shop"}>
                        <img className='rounded-xl p-3' src={rab3a} alt="..." />
                        <button className='relative top-[-10vh] left-[13vh] text-center text-[3vh] px-19 py-2 bg-white/90 hover:bg-[#e65a46] hover:text-white'>sunglasseq</button>
                    </Link>
                    <Link to={"/Shop"}>
                        <img className='rounded-xl p-3' src={sadsa} alt="..." />
                        <button className='relative top-[-10vh] left-[13vh] text-center text-[3vh] px-19 py-2 bg-white/90 hover:bg-[#e65a46] hover:text-white'>watches</button>
                    </Link>
                    <Link to={"/Shop"}>
                        <img className='rounded-xl p-3' src={sab3a} alt="..." />
                        <button className='relative top-[-10vh] left-[13vh] text-center text-[3vh] px-19 py-2 bg-white/90 hover:bg-[#e65a46] hover:text-white'>accessories</button>
                    </Link>
                </div>







                <div className='w-full h-[80vh] bg-cover bg-center' style={{ backgroundImage: `url(${tas3a})` }}>



                    <div className="flex justify-end items-center py-10 p-4">
                        <div className="bg-white p-6  shadow-md flex flex-col items-center">

                            <img src={tamna} alt="Product Image" className="w-[35vw] h-[40vh] transition duration-300 ease-in-out bg-cover hover:scale-105" />


                            <h3 className="text-xl font-semibold text-gray-700">Boxy2 T-Shirt with Roll Sleeve</h3>
                            <p className="text-gray-600 text-lg mb-6">$20.00</p>


                            <div className="flex items-center justify-center">


                                <div className="flex space-x-4">
                                    <div className="flex flex-col items-center border p-3">
                                        <span className="text-xl font-bold">{timeLeft.days || '0'}</span>
                                        <span className="text-sm text-gray-500">days</span>
                                    </div>
                                    <div className="flex flex-col items-center border p-3">
                                        <span className="text-xl font-bold">{timeLeft.hours || '0'}</span>
                                        <span className="text-sm text-gray-500">hrs</span>
                                    </div>
                                    <div className="flex flex-col items-center border p-3">
                                        <span className="text-xl font-bold">{timeLeft.minutes || '0'}</span>
                                        <span className="text-sm text-gray-500">mins</span>
                                    </div>
                                    <div className="flex flex-col items-center border p-3">
                                        <span className="text-xl font-bold">{timeLeft.seconds || '0'}</span>
                                        <span className="text-sm text-gray-500">secs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                 <div className="flex flex-col items-center gap-5">
      <h1 className="text-2xl font-bold">OUR PRODUCTS</h1>

      <div className="flex gap-9">
        <button className="text-gray-600 hover:text-black">Best Seller</button>
        <button className="text-gray-600 hover:text-black">Featured</button>
        <button className="text-gray-600 hover:text-black">Home Page</button>
      </div>

      <div id="ourproducts" className="grid grid-cols-4 gap-5 p-5">
        {products.map((product) => (
          <div key={product.id} className="w-[18vw] p-3">
            <div className="relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full transition duration-300 ease-in-out group-hover:scale-105"
              />
              <button
                className="absolute bottom-2 right-2 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
            <h1 className="mt-2 text-gray-800">
              {product.name}
              <br />
              <span className="text-gray-600">${product.price.toFixed(2)}</span>
            </h1>
          </div>
        ))}
      </div>

     
      {showModal && (
        <CartModal
          product={selectedProduct}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>


                <div className='p-3'>

                    <h1 className='text-center p-3  text-[5vh]'>Our Blog</h1>

                    <div className='flex'>

                        <Link to={"/blog"}>
                            <div className='p-2   flex flex-col gap-5'>
                                <img className='w-[55vh] transition duration-300 ease-in-out  hover:scale-105' src={bag} alt="" />
                                <div className='flex flex-col gap-5 text-gray-500'>
                                    <h1 className='text-xl w-95 text-black'>Black Friday Guide: Best Sales & Discount Codes</h1>
                                    <p>by fashe-theme Admin on Dec 28,2017</p>
                                    <p className='w-95'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/blog"}>
                            <div className='p-2  flex flex-col gap-5'>
                                <img className='w-[55vh] transition duration-300 ease-in-out  hover:scale-105' src={blog2} alt="" />
                                <div className='flex flex-col gap-5 text-gray-500'>
                                    <h1 className='text-xl w-95 text-black'>The White Sneakers Nearly Every Fashion Girls Own</h1>
                                    <p>by fashe-theme Admin on Dec 28,2017</p>
                                    <p className='w-95'>Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et...</p>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/blog"}>
                            <div className='p-2  flex flex-col gap-5'>
                                <img className='w-[55vh] transition duration-300 ease-in-out  hover:scale-105' src={blog3} alt="" />
                                <div className='flex flex-col gap-5 text-gray-500'>
                                    <h1 className='text-xl w-95 text-black'>New York SS 2018 Street Style: By Annina Mislin</h1>
                                    <p>by fashe-theme Admin on Dec 28,2017</p>
                                    <p className='w-95'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                                </div>
                            </div></Link>

                    </div>
                </div>



                <div className='flex flex-col gap-20 p-5'>
                    <h1 className='text-center text-[5vh] '>@ FOLLOW US ON INSTAGRAM</h1>
                    <div className='flex  justify-center gap-30 text-center p-5 text-gray-600'>
                        <div className='w-95  border-r-1 flex flex-col gap-4'>
                            <h1>Free Delivery Worldwide</h1>
                            <p>Mirum est notare quam littera gothica</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h1>30 Days Return</h1>
                            <p className='text-[2vh] '>Simply return it within 30 days for an exchange.</p>
                        </div>
                        <div className=' w-95 border-l-1 flex flex-col gap-4'>
                            <h1>Store Opening</h1>
                            <p>Shop open from Monday to Sunday</p>
                        </div>


                    </div>


                </div>




            </div>
            <Footer></Footer>

        </div>

    );
};

export default Home;