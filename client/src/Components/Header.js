import React from 'react';
import '../CSS/header.css';
const Header = () => {
    return (
      <header>
        <div className="header-logo">
          <img src="/path/to/logo.png" alt="MovieMate" />
        </div>
  
        <div className="header-navigation">
          <button className="header-menu-button">
            <MenuIcon />
          </button>
          <div className="header-search-bar">
            <input type="text" placeholder="Search movies..." />
            <button className="header-search-button">
              <SearchIcon />
            </button>
          </div>
          <button className="header-watchlist-button">
            <FavoriteIcon />
          </button>
          <button className="header-auth-button">
            <PersonIcon />
            <span>Sign In / Sign Up</span>
          </button>
        </div>
      </header>
    );
  };
export default Header;