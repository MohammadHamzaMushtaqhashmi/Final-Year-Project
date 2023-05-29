import React from 'react';
import '../CSS/header.css';
function Header() {
  return (
    <header>
      <img src="/images/logo.jpg" alt="MovieMate Logo" className="logo" />
      <button className="menu-button">Menu</button>
      <input type="text" placeholder="Search" className="search-bar" />
      <button className="watchlist-button">Watchlist</button>
      <button className="sign-in-button">Sign In</button>
      <button className="sign-up-button">Sign Up</button>
    </header>
  );
}

export default Header;