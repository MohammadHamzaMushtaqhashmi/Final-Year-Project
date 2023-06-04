import React, { useState } from 'react';
import '../CSS/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBookmark, faSearch, faUserPlus,faSignInAlt,faFilm} from '@fortawesome/free-solid-svg-icons';
/*import { useNavigate } from 'react-router-dom';*/

function Header() {
  /*const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchClick = () => {
          navigate('/search');
  }*/
  return (
    <header>
    <div className="logo">
      <img src="../images/MovieMate-icon.png" alt="logo" />
      <h3>MovieMate</h3>
    </div>
    <div className="nav" id="small_menu">
      <ul>
        <li><a href="menu"> <FontAwesomeIcon icon={faBars}/> Menu</a></li>
        <li><a href="#hollywood"> <FontAwesomeIcon icon={faFilm} />Movies</a></li>
        <li><a href="#tollywood"> <FontAwesomeIcon icon={faBookmark} /> Watchlist</a></li>
        <li><a href="#youtube">  <FontAwesomeIcon icon={faUserPlus} /> Sign Up</a></li>
      </ul>
    </div>
    <div className="user">
          <input type="text" placeholder="Search..." />
          <FontAwesomeIcon icon={faSearch}  />
        <a href="login">
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </a>
      </div>
  </header> 
  );
}
export default Header;
