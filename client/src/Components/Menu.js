import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import styles from '../CSS/menu.module.css'

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Setting the app element for the Modal component
Modal.setAppElement('#root');

function Menu({ isOpen, onRequestClose }) {
   // Rendering the modal menu with links to different pages
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      {/* Add a close button that calls the onRequestClose function when clicked */}
      <button className={styles.menubutton} onClick={onRequestClose}>Close</button>
      <div className={styles.container}>
      <div className={styles.column}>
          <h2>Movies</h2>
          <Link to="/release-calendar">Release Calendar</Link>
          <Link to="/dvd-bluray-releases">DVD & Blu-ray Releases</Link>
          <Link to="/top-rated-movies">Top Rated Movies</Link>
          <Link to="/browse-movies-by-genre">Browse Movies by Genre</Link>
          <Link to="/top-box-office">Top Box Office</Link>
          <Link to="/in-theaters">In Theaters</Link>
          <Link to="/coming-soon">Coming Soon</Link>
          <Link to="/movie-news">Movie News</Link>
          <Link to="/india-movie-spotlight">India Movie Spotlight</Link>
        </div>
        <div className={styles.column}>
          <h2>Celebs</h2>
          <Link to="/browse-movies-by-genre">Browse Movies by Genre</Link>
          <Link to="/top-box-office">Top Box Office</Link>
          <Link to="/in-theaters">In Theaters</Link>
        </div>
        <div className={styles.column}>
          <h2>Tv Shows</h2>
          <Link to="/top-rated-tv-shows">Top Rated TV Shows</Link>
          <Link to="/most-popular-tv-shows">Most Popular TV Shows</Link>
          <Link to="/top-box-office">Top Box Office</Link>
          <Link to="/in-theaters">In Theaters</Link>
          <Link to="/coming-soon">Coming Soon</Link>
          <Link to="/tv-show-news">TV Show News</Link>
          <Link to="/india-tv-show-spotlight">India TV Show Spotlight</Link>
        </div>
        <div className={styles.column}>
          <h2>Awards & Events</h2>
          <Link to="/release-calendar">Release Calendar</Link>
          <Link to="/dvd-bluray-releases">DVD & Blu-ray Releases</Link>
          <Link to="/top-rated-movies">Top Rated Movies</Link>
          <Link to="/browse-movies-by-genre">Browse Movies by Genre</Link>
          <Link to="/top-box-office">Top Box Office</Link>
          <Link to="/in-theaters">In Theaters</Link>
          <Link to="/coming-soon">Coming Soon</Link>
          <Link to="/most-popular-movie">Most Popular Movie</Link>
        </div>
        <div className={styles.column}>
          <h2>Community</h2>
          <Link to="/top-box-office">Top Box Office</Link>
          <Link to="/in-theaters">In Theaters</Link>
          <Link to="/coming-soon">Coming Soon</Link>
        </div>
      </div>
    </Modal>
  );
}

export default Menu;
