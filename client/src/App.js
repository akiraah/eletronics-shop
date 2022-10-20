import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'

import React from 'react'
import './App.css'

import Cart from './page/Cart'
import Home from './page/Home'

const App = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/basket" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
