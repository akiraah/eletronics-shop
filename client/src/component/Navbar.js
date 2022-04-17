import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <header>
      <h1 className="header-title">Shop</h1>
      <nav>
          <Link className="links" to="/">Home</Link>
          <Link className="links" to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Navbar;
