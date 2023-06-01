import React from 'react';
import '../CSS/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBookmark, faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      <div className="header-left">
        <img src="/images/logo.jpg" alt="MovieMate Logo" className="logo" />
        <button className="menu-button">
          <FontAwesomeIcon icon={faBars} /> Menu
        </button>
      </div>
      <div className="search-container">
        <select id="search-select">
          <option value="all">All</option>
          <option value="movies">Movies</option>
          <option value="tv_shows">TV Shows</option>
          <option value="celebrities">Celebrities</option>
          <option value="titles">Titles</option>
        </select>
        <input type="text" placeholder="Search" className="search-bar" />
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="header-right">
        <button className="watchlist-button">
          <FontAwesomeIcon icon={faBookmark} /> Watchlist
        </button>
        <button className="sign-in-button">Sign In</button>
        <button className="sign-up-button">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
