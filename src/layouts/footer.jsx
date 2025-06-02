import React from 'react';
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaPinterestSquare, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className='w-[163.4vh] bg-[#f0f0f0] h-[40vh]  '>

                <footer className="bg-gray-100 text-gray-700 px-6 md:px-16 py-12">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-sm">

                        <div>
                            <h2 className="text-base font-semibold mb-4">GET IN TOUCH</h2>
                            <p className="">
                                Any questions? Let us know in store at 8th floor
                                379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879

                            </p>
                            <div className='flex gap-5 py-7'>
                                <a className='hover:text-orange-400 text-gray-600/60 ' href=""><FaFacebookF /></a>
                                <a className='hover:text-orange-400 text-gray-600/60 ' href=""><FaTwitter /></a>
                                <a className='hover:text-orange-400 text-gray-600/60 ' href=""><FaPinterestSquare /></a>
                                <a className='hover:text-orange-400 text-gray-600/60 ' href=""><FaGooglePlusG /></a>
                                <a className='hover:text-orange-400 text-gray-600/60 ' href=""><FaInstagram /></a>
                            </div>
                            <div className="flex space-x-4 text-xl text-gray-600 mt-4">
                                <a href="#"><i className="fab fa-facebook-f hover:text-black"></i></a>
                                <a href="#"><i className="fab fa-twitter hover:text-black"></i></a>
                                <a href="#"><i className="fab fa-pinterest hover:text-black"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g hover:text-black"></i></a>
                                <a href="#"><i className="fab fa-instagram hover:text-black"></i></a>
                            </div>
                        </div>


                        <div>
                            <h2 className="text-base font-semibold mb-4">CATEGORIES</h2>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">Men</a></li>
                                <li><a href="#" className="hover:underline">Women</a></li>
                                <li><a href="#" className="hover:underline">Dresses</a></li>
                                <li><a href="#" className="hover:underline">Sunglasses</a></li>
                            </ul>
                        </div>


                        <div>
                            <h2 className="text-base font-semibold mb-4">LINKS</h2>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">Search</a></li>
                                <li><a href="#" className="hover:underline">About Us</a></li>
                                <li><a href="#" className="hover:underline">Contact Us</a></li>
                                <li><a href="#" className="hover:underline">Returns</a></li>
                            </ul>
                        </div>


                        <div>
                            <h2 className="text-base font-semibold mb-4">HELP</h2>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">Track Order</a></li>
                                <li><a href="#" className="hover:underline">Returns</a></li>
                                <li><a href="#" className="hover:underline">Shipping</a></li>
                                <li><a href="#" className="hover:underline">FAQs</a></li>
                            </ul>
                        </div>


                        <div>
                            <h2 className="text-base font-semibold mb-4">NEWSLETTER</h2>
                            <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-black" />
                            <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>


                    <div className="text-center text-xs text-gray-500 mt-10">
                        &copy; 2018 <a href="#" className="text-gray-700 font-medium">MassTechnologist.com</a>. All rights reserved.
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;