import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Coffee Abode</h2>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="#products">Shop</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
