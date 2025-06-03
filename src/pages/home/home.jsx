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

                        <div className="duration-300 ease-in-out absolute inset-0 transition-all h-full transform translate-x-0" data-carousel-item="active">
                            <img src={carossel} className="absolute block h-full  w-[25vw] -translate-x-1/2 -translate-y-1/2 top-1/2 left-[130vh]" alt="carousel image 1" />
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




                <div className='p-3'>

                    <h1 className='text-center p-3  text-[5vh]'>Our Blog</h1>

                    <div className='flex'>

                        <div className='p-2   flex flex-col gap-5'>
                            <img className='w-[55vh] transition duration-300 ease-in-out  hover:scale-105' src={bag} alt="" />
                            <div className='flex flex-col gap-5 text-gray-500'>
                                <h1 className='text-xl w-95 text-black'>Black Friday Guide: Best Sales & Discount Codes</h1>
                                <p>by fashe-theme Admin on Dec 28,2017</p>
                                <p className='w-95'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                            </div>
                        </div>
                        <div className='p-2  flex flex-col gap-5'>
                            <img className='w-[55vh] transition duration-300 ease-in-out  hover:scale-105' src={blog2} alt="" />
                            <div className='flex flex-col gap-5 text-gray-500'>
                                <h1 className='text-xl w-95 text-black'>The White Sneakers Nearly Every Fashion Girls Own</h1>
                                <p>by fashe-theme Admin on Dec 28,2017</p>
                                <p className='w-95'>Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et...</p>
                            </div>
                        </div>
                        <div className='p-2  flex flex-col gap-5'>
                            <img className='w-[55vh] transition duration-300 ease-in-out  hover:scale-105' src={blog3} alt="" />
                            <div className='flex flex-col gap-5 text-gray-500'>
                                <h1 className='text-xl w-95 text-black'>New York SS 2018 Street Style: By Annina Mislin</h1>
                                <p>by fashe-theme Admin on Dec 28,2017</p>
                                <p className='w-95'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                            </div>
                        </div>

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