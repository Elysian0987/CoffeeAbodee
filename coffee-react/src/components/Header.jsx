import React from "react";
import './Home.css'; // Assuming you have a CSS file for styling

function Header() {
  return (
    <div>
        <header id="header">
        <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Logo" />
        <h1>Coffee Abode</h1>
      </header>
      <nav>
        <a href="/">Home</a> |
        <a href="/menu">Menu</a> |
        <a href="/merch">Merchandise</a> |
        <a href="/login">Login</a>
      </nav>
    </div>
  );
}

export default Header;
