import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import './Home.css';

function Header() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <div className="header-container">
      <header id="header">
        <Link to="/home" className="logo-link">
          <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Logo" />
          <h1>Coffee Abode</h1>
        </Link>
      </header>
      <nav className="main-nav">
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/merch">Merchandise</Link>
          <Link to="/about">About</Link>
        </div>
        <Link to="/cart" className="cart-link">
          <span className="cart-icon">🛒</span>
          <span className="cart-text">Cart</span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </nav>
    </div>
  );
}

export default Header;