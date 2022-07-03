import React, { useState } from 'react';
import Navbar from './Navbar';

export const ResponsiveNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-100">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default ResponsiveNavBar;