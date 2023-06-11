// Importing necessary modules and components
import React, { useState } from 'react';
import '../CSS/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faBookmark,
  faSearch,
  faUserPlus,
  faSignInAlt,
  faHome,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Menu from './Menu';

// Defining the Header component
function Header({ loggedInUser }) {
  // Setting up state for showing/hiding elements and tracking dark mode
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  // Defining a function to handle clicks on the search icon
  const handleSearchIconClick = () => {
    setShowSearchInput(!showSearchInput);
    navigate('/SearchResults');
  };

  // Defining a function to handle clicks on the menu link
  const handleMenuClick = () => {
    setShowMenu(true);
  };

  // Defining a function to handle closing the menu
  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  // Defining a function to handle clicks on the theme toggle icon
  const handleThemeToggleClick = () => {
    toggleTheme();
    setIsDarkMode(!isDarkMode);
  };

  // Defining a function to toggle between light and dark modes
  function toggleTheme() {
    const html = document.documentElement;
    if (html.getAttribute('data-theme') === 'dark') {
      html.setAttribute('data-theme', 'light');
    } else {
      html.setAttribute('data-theme', 'dark');
    }
  }

  // Rendering the header with navigation links and user information
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
          {/* Rendering an icon for toggling between light and dark modes */}
          <FontAwesomeIcon
            icon={isDarkMode ? faSun : faMoon}
            onClick={handleThemeToggleClick}
          />
          <FontAwesomeIcon icon={faSearch} onClick={handleSearchIconClick} />
          {loggedInUser ? (
            <div>
              <img src={loggedInUser.profilePicture} alt="Profile" />
              {loggedInUser.name}
            </div>
          ) : (
            <Link to="/login">
              <FontAwesomeIcon icon={faSignInAlt} /> Login
            </Link>
          )}
        </div>
      </header>

      {/* Rendering the Menu component */}
      <Menu isOpen={showMenu} onRequestClose={handleCloseMenu} />
    </>
  );
}

// Exporting the Header component as the default export
export default Header;
