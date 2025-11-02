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
        <div className="nav-right">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search..." 
              className="search-input"
            />
            <button className="search-button">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <Link to="/cart" className="cart-link">
            <span className="cart-icon">🛒</span>
            <span className="cart-text">Cart</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;