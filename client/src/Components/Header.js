import React, { useState } from 'react';
import '../CSS/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faBookmark,
  faSearch,
  faUserPlus,
  faSignInAlt,
  faFilm,
} from '@fortawesome/free-solid-svg-icons';
import SearchResults from './SearchResults';

function Header({ setShowSearchResults }) {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    if (event.target.value === '') {
      setShowSearchResults(false);
    }
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
    setShowSearchResults(true);
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
              <a href="#hollywood">
                {' '}
                <FontAwesomeIcon icon={faFilm} />Movies
              </a>
            </li>
            <li>
              <a href="#tollywood">
                {' '}
                <FontAwesomeIcon icon={faBookmark} /> Watchlist
              </a>
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
          <FontAwesomeIcon icon={faSearch} onClick={() => setShowSearchInput(!showSearchInput)} />
          {showSearchInput && (
            <>
              <input type="text" onChange={handleSearchInputChange} onKeyPress={handleSearchInputKeyPress} value={searchQuery} />
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
  faFilm,
} from '@fortawesome/free-solid-svg-icons';
import SearchResults from './SearchResults';

function Header({ setShowSearchResults }) {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    if (event.target.value === '') {
      setShowSearchResults(false);
    }
  };
  const fetchSearchResults = async () => {
    try {
      const apiKey = '499d99db6ce23991d21afde0deede0f1';
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
      );
      const data = await response.json();
      if (data.results) {
        setSearchResults(data.results);
        setShowSearchResults(true);
      } else {
        console.error('Error fetching search results:', data);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  
  const fetchSearchResults = async () => {
    const apiKey = 'YOUR_API_KEY_HERE';
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
    );
    const data = await response.json();
    setSearchResults(data.results);
    setShowSearchResults(true);
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
              <a href="#hollywood">
                {' '}
                <FontAwesomeIcon icon={faFilm} />Movies
              </a>
            </li>
            <li>
              <a href="#tollywood">
                {' '}
                <FontAwesomeIcon icon={faBookmark} /> Watchlist
              </a>
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
          <FontAwesomeIcon icon={faSearch} onClick={() => setShowSearchInput(!showSearchInput)} />
          {showSearchInput && (
            <>
              <input type="text" onChange={handleSearchInputChange} value={searchQuery} />
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
