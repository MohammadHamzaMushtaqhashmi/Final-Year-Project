import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import '../CSS/header.css';
const Header = () => {
    return (
      <header>
        <div className="header-logo">
          <img src="/path/to/logo.png" alt="MovieMate" />
        </div>
  
        <div className="header-navigation">
          <button className="header-menu-button">
            
          </button>
          <div className="header-search-bar">
            <input type="text" placeholder="Search movies..." />
            <button className="header-search-button">
              
            </button>
          </div>
          <button className="header-watchlist-button">
            
          </button>
          <button className="header-auth-button">
            <span>Sign In / Sign Up</span>
          </button>
        </div>
      </header>
    );
  };
export default Headers;