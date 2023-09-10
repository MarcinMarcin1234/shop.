import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import ShopCartContext from './context';
import Home from './core/pages/Home/Home';
import Blog from './core/pages/Blog/Blog';
import SingleBlog from './core/pages/Blog/SingleBlog';
import Shop from './core/pages/Shop/Shop';
import SingleShop from './core/pages/Shop/SingleShop';
import Contact from './core/pages/Contact/Contact';
import Footer from './core/components/Footer/Footer';
import Navbar from './core/components/Navbar/Navbar';
import ShopingCart from './core/pages/ShopingCart/ShopingCart';
import NotFound from './core/pages/NotFound/NotFound';

const ReasetStyles = createGlobalStyle`
  *,*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`  
const App = () => {
  return(
    <ShopCartContext>
    <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/single-blog" element={<SingleBlog />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<SingleShop />} />
            <Route path="/cart-list" element={<ShopingCart />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
        <ReasetStyles />
    </BrowserRouter>
    </ShopCartContext>
  );
}
export default App;
