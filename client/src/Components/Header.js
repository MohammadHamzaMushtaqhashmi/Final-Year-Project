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

function Header() {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const navigate = useNavigate();

  const handleSearchIconClick = () => {
    setShowSearchInput(!showSearchInput);
    navigate('/SearchResults');
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
              <a href="menu">
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
              <a href="#youtube">
                {' '}
                <FontAwesomeIcon icon={faUserPlus} /> Sign Up
              </a>
            </li>
          </ul>
        </div>
        <div className="user">
          <FontAwesomeIcon
            icon={faSearch}
            onClick={handleSearchIconClick}
          />
          {showSearchInput && (
            <>
              {/* Add your search input here */}
            </>
          )}
          <a href="login">
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </a>
        </div>
      </header>
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
} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const navigate = useNavigate();

  const handleSearchIconClick = () => {
    setShowSearchInput(!showSearchInput);
    navigate('/SearchResults');
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
              <a href="menu">
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
              <a href="#youtube">
                {' '}
                <FontAwesomeIcon icon={faUserPlus} /> Sign Up
              </a>
            </li>
          </ul>
        </div>
        <div className="user">
          <FontAwesomeIcon
            icon={faSearch}
            onClick={handleSearchIconClick}
          />
          {showSearchInput && (
            <>
              
            </>
          )}
          <a href="login">
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;*/
