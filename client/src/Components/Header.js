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
  faHome,
  faMoon,
  faSun // Import the faMoon and faSun icons
} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Menu from './Menu'; // Import the Menu component

function Header({ loggedInUser }) {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // State to track whether to show the Menu component
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track whether dark mode is enabled
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

  const handleThemeToggleClick = () => {
    toggleTheme(); // Call the toggleTheme function to switch between light and dark modes
    setIsDarkMode(!isDarkMode); // Update the isDarkMode state variable
  };

  // Define the toggleTheme function directly in the Header component
  function toggleTheme() {
    const html = document.documentElement;
    if (html.getAttribute('data-theme') === 'dark') {
      html.setAttribute('data-theme', 'light');
    } else {
      html.setAttribute('data-theme', 'dark');
    }
  }

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
          {/* Add a new FontAwesomeIcon element for the moon/sun icon */}
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

      {/* Render the Menu component and pass in the necessary props */}
      <Menu isOpen={showMenu} onRequestClose={handleCloseMenu} />
    </>
  );
}

export default Header;

