import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaPinterestSquare, FaTwitter } from 'react-icons/fa';
import { IoBagOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import logo from "../assets/image/logo.png.webp"

const Navbar = () => {
    return (
        <>
            <header className='w-[20vw] h-[100vh] fixed bg-[#ffffff] border-r-1 border-black/20 '>
                <div className='flex flex-col  gap-[10vh] items-center p-10'>

                   <img src={logo} alt="" />
                    <div className='flex gap-6 items-center'>
                        <a className='w-[7vh]  border-r-1 border-black/30 hover:text-orange-400 text-gray-600/60 ' href=""><BsPersonCircle size={"3.7vh"} /></a>
                        <a className='hover:text-orange-400 text-gray-600/60 ' href=""><IoBagOutline size={"3.7vh"} /></a>

                    </div>

                    <nav className='flex flex-col gap-5 text-center'>
                        <Link to={"/"} className='hover:text-orange-400' >Home</Link>
                        <Link to={"/Shop"} className='hover:text-orange-400' href="">Shop</Link>
                        <Link to={""} className='hover:text-orange-400' href="">Sale</Link>
                        <Link to={""} className='hover:text-orange-400' href="">Features</Link>
                        <Link to={"/Blog"} className='hover:text-orange-400' href="">Blog</Link>
                        <Link to={"/About"} className='hover:text-orange-400' href="">About</Link>
                        <Link to={"/Contact"} className='hover:text-orange-400' href="">Contact</Link>
                    </nav>



                    <div className='flex gap-5'>
                        <a className='hover:text-orange-400 text-gray-600/60 ' href=""><FaFacebookF   /></a>
                        <a className='hover:text-orange-400 text-gray-600/60 ' href=""><FaTwitter  /></a>
                        <a className='hover:text-orange-400 text-gray-600/60 ' href=""><FaPinterestSquare  /></a>
                        <a className='hover:text-orange-400 text-gray-600/60 ' href=""><FaGooglePlusG  /></a>
                        <a className='hover:text-orange-400 text-gray-600/60 ' href=""><FaInstagram  /></a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;