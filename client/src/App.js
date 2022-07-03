import { Routes, Route } from 'react-router-dom';
import ResponsiveNavBar from './component/ResponsiveNavBar';
import Navbar from './component/Navbar';

import './App.css';
import React from 'react';

import Cart from './page/Cart';
import Home from './page/Home';

const App = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/basket" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
