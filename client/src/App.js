import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import './App.css';

import Cart from './page/Cart';
import Home from './page/Home';

const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;

