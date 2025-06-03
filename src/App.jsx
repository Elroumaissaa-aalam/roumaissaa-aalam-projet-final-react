import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Footer from './layouts/footer';
import Navbar from './layouts/navbar';
import Shop from './pages/shop/shop';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Blog from './pages/blog/blog';
import Singup from './pages/sing up/singup';
import Achat from './pages/achat/achat';

const App = () => {
  return (
    <>
  <div  className='flex '>


     <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/singup" element={<Singup />} />
      <Route path="/achat" element={<Achat />} />
   
     </Routes>
  </div>
   
    
    </>
  );
};

export default App;