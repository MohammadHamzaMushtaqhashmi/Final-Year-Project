import React from 'react';
import '../CSS/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBookmark, faSearch } from '@fortawesome/free-solid-svg-icons';

/*function Header() {
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
}*/

function Header() {
  return (
    <header>
    <div className="logo">
      <img src="../images/MovieMate-icon.png" alt="logo" />
      <h3>MovieMate</h3>
    </div>
    <div className="nav" id="small_menu">
      <button className="hamburger" id="hamburger">
        <i className="fas fa-bars" />
      </button>
      <ul>
        <li><a href>Menu</a></li>
        <li><a href="#hollywood">Movies</a></li>
        <li><a href="#tollywood">Watchlist</a></li>
        <li><a href="#youtube">Sign Up</a></li>
      </ul>
    </div>
    <div className="user">
      <i className="fas fa-bell" />
      <i className="fas fa-search" />
      <a href>Login</a>
    </div>  
  </header> 
  );
}
export default Header;
