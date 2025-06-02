import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Footer from './layouts/footer';
import Navbar from './layouts/navbar';
import Shop from './pages/shop/shop';
import About from './pages/about/about';

const App = () => {
  return (
    <>
  <div  className='flex '>


     <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
   
     </Routes>
  </div>
   
    
    </>
  );
};

export default App;