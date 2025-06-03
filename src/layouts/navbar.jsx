import React, { useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaPinterestSquare, FaTwitter } from 'react-icons/fa';
import { IoBagOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import logo from "../assets/image/logo.png.webp"

const Navbar = () => {
      const [showMobileNav, setShowMobileNav] = useState(false);
    return (
        <>
         <header className='hidden md:flex w-[20vw] h-[100vh] fixed bg-white border-r border-black/20 z-50'>
        <div className='flex flex-col gap-[10vh] items-center p-10 w-full'>

          <img src={logo} alt="Logo" />

          <div className='flex gap-6 items-center'>
            <Link to="/singup" className='flex w-[7vh] border-r border-black/30 hover:text-orange-400 text-gray-600/60'>
              <BsPersonCircle size={"3.7vh"} />
            </Link>
            <Link to="/achat" className='hover:text-orange-400 text-gray-600/60'>
              <IoBagOutline size={"3.7vh"} />
            </Link>
          </div>

          <nav className='flex flex-col gap-5 text-center'>
            <Link to="/" className='hover:text-orange-400'>Home</Link>
            <Link to="/Shop" className='hover:text-orange-400'>Shop</Link>
            <Link to="/Sale" className='hover:text-orange-400'>Sale</Link>
            <Link to="/Features" className='hover:text-orange-400'>Features</Link>
            <Link to="/Blog" className='hover:text-orange-400'>Blog</Link>
            <Link to="/About" className='hover:text-orange-400'>About</Link>
            <Link to="/Contact" className='hover:text-orange-400'>Contact</Link>
          </nav>

          <div className='flex gap-5'>
            <a className='hover:text-orange-400 text-gray-600/60' href="#"><FaFacebookF /></a>
            <a className='hover:text-orange-400 text-gray-600/60' href="#"><FaTwitter /></a>
            <a className='hover:text-orange-400 text-gray-600/60' href="#"><FaPinterestSquare /></a>
            <a className='hover:text-orange-400 text-gray-600/60' href="#"><FaGooglePlusG /></a>
            <a className='hover:text-orange-400 text-gray-600/60' href="#"><FaInstagram /></a>
          </div>
        </div>
      </header>

      {/* ===== Burger Menu Button ===== */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setShowMobileNav(true)}
          className="text-3xl text-gray-700"
        >
          ☰
        </button>
      </div>

      {/* ===== Mobile Nav Overlay ===== */}
      {showMobileNav && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center gap-6 pt-10 px-6">
          <button
            onClick={() => setShowMobileNav(false)}
            className="absolute top-4 right-4 text-3xl text-gray-700"
          >
            ×
          </button>

          <img src={logo} alt="Logo" className="w-24" />

          <nav className='flex flex-col gap-5 text-center mt-4 text-lg'>
            <Link to="/" onClick={() => setShowMobileNav(false)} className='hover:text-orange-400'>Home</Link>
            <Link to="/Shop" onClick={() => setShowMobileNav(false)} className='hover:text-orange-400'>Shop</Link>
            <Link to="/Sale" onClick={() => setShowMobileNav(false)} className='hover:text-orange-400'>Sale</Link>
            <Link to="/Features" onClick={() => setShowMobileNav(false)} className='hover:text-orange-400'>Features</Link>
            <Link to="/Blog" onClick={() => setShowMobileNav(false)} className='hover:text-orange-400'>Blog</Link>
            <Link to="/About" onClick={() => setShowMobileNav(false)} className='hover:text-orange-400'>About</Link>
            <Link to="/Contact" onClick={() => setShowMobileNav(false)} className='hover:text-orange-400'>Contact</Link>
          </nav>

          <div className='flex gap-4 mt-6 text-gray-600'>
            <a className='hover:text-orange-400' href="#"><FaFacebookF /></a>
            <a className='hover:text-orange-400' href="#"><FaTwitter /></a>
            <a className='hover:text-orange-400' href="#"><FaPinterestSquare /></a>
            <a className='hover:text-orange-400' href="#"><FaGooglePlusG /></a>
            <a className='hover:text-orange-400' href="#"><FaInstagram /></a>
          </div>
        </div>
      )}
        </>
    );
};

export default Navbar;