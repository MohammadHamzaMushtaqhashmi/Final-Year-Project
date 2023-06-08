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

/*import React, { useState } from 'react';
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
import SearchResults from './SearchResults';

function Header() {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchSearchResults();
    }
  };

  const fetchSearchResults = async () => {
    const apiKey = '499d99db6ce23991d21afde0deede0f1';
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
    );
    const data = await response.json();
    setSearchResults(data.results);
    navigate('/SearchResults');
  };
  const handleNavigation = () => {
    setSearchResults([]);
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
              <Link to="/WatchList" onClick={handleNavigation}>
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
            onClick={() => setShowSearchInput(!showSearchInput)}
          />
          {showSearchInput && (
            <>
              <input
                type="text"
                onChange={handleSearchInputChange}
                onKeyPress={handleSearchInputKeyPress}
                value={searchQuery}
              />
              <button onClick={fetchSearchResults}>Search</button>
            </>
          )}
          <a href="login">
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </a>
        </div>
      </header>
      {searchResults.length > 0 && (
        <SearchResults searchResults={searchResults} />
      )}
    </>
  );
}

export default Header;*/
