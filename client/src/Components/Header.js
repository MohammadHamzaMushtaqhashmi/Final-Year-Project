// In Header.js
import React, { useState } from 'react';
import '../CSS/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faBookmark,
  faSearch,
  faUserPlus,
  faSignInAlt,
  faHome
} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Menu from './Menu'; // Import the Menu component

function Header() {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // State to track whether to show the Menu component
  const navigate = useNavigate();

  const handleSearchIconClick = () => {
    setShowSearchInput(!showSearchInput);
    navigate('/SearchResults');
  };

  const handleMenuClick = () => {
    setShowMenu(true); // Show the Menu component when the user clicks on the Menu link
  };

  const handleCloseMenu = () => {
    setShowMenu(false); // Hide the Menu component when the user clicks on the close button
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src="../images/MovieMate-icon.png" alt="logo" />
          <h3>MovieMate</h3>
        </div>
        <div className="nav" id="small_menu">
          <ul>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </li>
            <li>
              <a href="#" onClick={handleMenuClick}>
                {' '}
                <FontAwesomeIcon icon={faBars} /> Menu
              </a>
            </li>
            <li>
              <Link to="/WatchList">
                {' '}
                <FontAwesomeIcon icon={faBookmark} /> Watchlist
              </Link>
            </li>
            <li>
              <Link to="/signup">
                {' '}
                <FontAwesomeIcon icon={faUserPlus} /> Sign Up
              </Link>
            </li>
          </ul>
        </div>
        <div className="user">
          <FontAwesomeIcon icon={faSearch} onClick={handleSearchIconClick} />
          <Link to="/login">
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </Link>
        </div>
      </header>

      {/* Render the Menu component and pass in the necessary props */}
      <Menu isOpen={showMenu} onRequestClose={handleCloseMenu} />
    </>
  );
}

export default Header;

/*
// In Header.js
import React, { useState } from 'react';
import '../CSS/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faBookmark,
  faSearch,
  faUserPlus,
  faSignInAlt,
  faHome
} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Menu from './Menu'; // Import the Menu component

function Header() {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // State to track whether to show the Menu component
  const navigate = useNavigate();

  const handleSearchIconClick = () => {
    setShowSearchInput(!showSearchInput);
    navigate('/SearchResults');
  };

  const handleMenuClick = () => {
    setShowMenu(true); // Show the Menu component when the user clicks on the Menu link
    document.body.classList.add('menu-open'); // Add a class to the body element
  };

  const handleCloseMenu = () => {
    setShowMenu(false); // Hide the Menu component when the user clicks on the close button
    document.body.classList.remove('menu-open'); // Remove the class from the body element
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src="../images/MovieMate-icon.png" alt="logo" />
          <h3>MovieMate</h3>
        </div>
        <div className="nav" id="small_menu">
          <ul>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </li>
            <li>
              <a href="#" onClick={handleMenuClick}>
                {' '}
                <FontAwesomeIcon icon={faBars} /> Menu
              </a>
            </li>
            <li>
              <Link to="/WatchList">
                {' '}
                <FontAwesomeIcon icon={faBookmark} /> Watchlist
              </Link>
            </li>
            <li>
              <Link to="/signup">
                {' '}
                <FontAwesomeIcon icon={faUserPlus} /> Sign Up
              </Link>
            </li>
          </ul>
        </div>
        <div className="user">
          <FontAwesomeIcon icon={faSearch} onClick={handleSearchIconClick} />
          <Link to="/login">
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </Link>
        </div>
      </header>

      {showMenu && ( // Conditionally render the Menu component based on the value of showMenu
        <>
          <div className="menu-overlay" onClick={handleCloseMenu}></div> // Overlay to close the menu when clicked outside
          <div className={`menu-container ${showMenu ? 'open' : ''}`}>
            <span className="menu-close-button" onClick={handleCloseMenu}>
              ×
            </span> // Close button to hide the Menu component
            <Menu />
          </div>
        </>
      )}
    </>
  );
}

export default Header;*/
