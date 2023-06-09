import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import '../CSS/menu.css'

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function Menu({ isOpen, onRequestClose }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      {/* Add a close button that calls the onRequestClose function when clicked */}
      <button onClick={onRequestClose}>Close</button>
      <div className="container">
      <div className="column">
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
        <div className="column">
          <h2>Celebs</h2>
          <Link to="/browse-movies-by-genre">Browse Movies by Genre</Link>
          <Link to="/top-box-office">Top Box Office</Link>
          <Link to="/in-theaters">In Theaters</Link>
        </div>
        <div className="column">
          <h2>Tv Shows</h2>
          <Link to="/top-rated-tv-shows">Top Rated TV Shows</Link>
          <Link to="/most-popular-tv-shows">Most Popular TV Shows</Link>
          <Link to="/top-box-office">Top Box Office</Link>
          <Link to="/in-theaters">In Theaters</Link>
          <Link to="/coming-soon">Coming Soon</Link>
          <Link to="/tv-show-news">TV Show News</Link>
          <Link to="/india-tv-show-spotlight">India TV Show Spotlight</Link>
        </div>
        <div className="column">
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
        <div className="column">
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

/*import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import '../CSS/menu.css'

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function Menu({ isOpen, onRequestClose }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className="container">
        <div className="movie-celebs">
          <div className="card">
            <h1>Moviemate</h1>
          </div>
          <span className="fa fa-times close"></span>
          <h2>
            <span className="fa fa-film f-icon"></span>Movies
          </h2>
          <Link to="/release-calendar">Release Calendar</Link>
          <Link to="/dvd-bluray-releases">DVD & Blu-ray Releases</Link>
          <Link to="/top-rated-movies">Top Rated Movies</Link>
          <Link to="/browse-movies-by-genre">Browse Movies by Genre</Link>
          <Link to="/top-box-office">Top Box Office</Link>
          <Link to="/in-theaters">In Theaters</Link>
          <Link to="/coming-soon">Coming Soon</Link>
          <Link to="/movie-news">Movie News</Link>
          <Link to="/india-movie-spotlight">India Movie Spotlight</Link>
          <h2>
            <span className="fa fa-users f-icon"></span>Celebs
          </h2>
          <Link to="/browse-movies-by-genre">Browse Movies by Genre</Link>
          <Link to="/top-box-office">Top Box Office</Link>
          <Link to="/in-theaters">In Theaters</Link>
        </div>
        <div className="tv-shows">
          <h2>
            <span className="fa fa-television f-icon"></span>Tv Shows
          </h2>
          <Link to="/top-rated-tv-shows">Top Rated TV Shows</Link>
          <Link to="/most-popular-tv-shows">Most Popular TV Shows</Link>
          <Link to="/top-box-office">Top Box Office</Link>
          <Link to="/in-theaters">In Theaters</Link>
          <Link to="/coming-soon">Coming Soon</Link>
          <Link to="/tv-show-news">TV Show News</Link>
          <Link to="/india-tv-show-spotlight">India TV Show Spotlight</Link>
        </div>
        <div className="awards-events">
          <h2>
            <span className="fa fa-star f-icon"></span>Awards & Events
          </h2>
          <Link to="/release-calendar">Release Calendar</Link>
          <Link to="/dvd-bluray-releases">DVD & Blu-ray Releases</Link>
          <Link to="/top-rated-movies">Top Rated Movies</Link>
          <Link to="/browse-movies-by-genre">Browse Movies by Genre</Link>
          <Link to="/top-box-office">Top Box Office</Link>
          <Link to="/in-theaters">In Theaters</Link>
          <Link to="/coming-soon">Coming Soon</Link>
          <Link to="/most-popular-movie">Most Popular Movie</Link>
          <h2>
            <span className="fa fa-globe f-icon"></span>Community
          </h2>
          <Link to="/top-box-office">Top Box Office</Link>
          <Link to="/in-theaters">In Theaters</Link>
          <Link to="/coming-soon">Coming Soon</Link>
        </div>
      </div>
    </Modal>
  );
}

export default Menu;*/

