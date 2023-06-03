import React from 'react';
import '../CSS/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBookmark, faSearch } from '@fortawesome/free-solid-svg-icons';

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
        <li><a href="menu">Menu</a></li>
        <li><a href="#hollywood">Movies</a></li>
        <li><a href="#tollywood">Watchlist</a></li>
        <li><a href="#youtube">Sign Up</a></li>
      </ul>
    </div>
    <div className="user">
      <i className="fas fa-bell" />
      <i className="fas fa-search" />
      <a href="login">Login</a>
    </div>  
  </header> 
  );
}
export default Header;
