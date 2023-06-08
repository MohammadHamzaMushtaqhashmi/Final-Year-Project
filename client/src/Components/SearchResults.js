// In SearchResults.js
import React from 'react';
import '../CSS/movieslist.css';

function SearchResults({ searchResults, addToWatchlist }) {
  const playTrailer = (movie) => {
    // Add your code here to handle playing the trailer for a movie
  };

  const handleScrollClick = (direction) => {
    const container = document.querySelector('.movies-container');
    if (direction === 'left') {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    } else if (direction === 'right') {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="movies-list">
        <button className="scroll-button" onClick={() => handleScrollClick('left')}>
          {'<'}
        </button>
        <div className="movies-container">
          {searchResults.map((result) => (
            <div key={result.id} className="movie-card">
              <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt={result.title} style={{ height: '300px' }} />
              <h3 style={{ height: '40px', zIndex: 1 }}>{result.title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <button onClick={() => addToWatchlist(result)}>
                  Watchlist <span>+</span>
                </button>
                <button onClick={() => playTrailer(result)}>
                  <span>▶</span> Play
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-button" onClick={() => handleScrollClick('right')}>
          {'>'}
        </button>
      </div>
    </div>
  );
}

export default SearchResults;

/*
// In SearchResults.js
import React from 'react';
import '../CSS/movieslist.css';

function SearchResults({ searchResults, addToWatchlist }) {
  const playTrailer = (movie) => {
    // Add your code here to handle playing the trailer for a movie
  };

  const handleScrollClick = (direction) => {
    const container = document.querySelector('.movies-container');
    if (direction === 'left') {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    } else if (direction === 'right') {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h2>Search Results</h2>
      <div className="movies-list">
        <button className="scroll-button" onClick={() => handleScrollClick('left')}>
          {'<'}
        </button>
        <div className="movies-container">
          {searchResults.map((result) => (
            <div key={result.id} className="movie-card">
              <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt={result.title} style={{ height: '300px' }} />
              <h3 style={{ height: '40px', zIndex: 1 }}>{result.title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <button onClick={() => addToWatchlist(result)}>
                  Watchlist <span>+</span>
                </button>
                <button onClick={() => playTrailer(result)}>
                  <span>▶</span> Play
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-button" onClick={() => handleScrollClick('right')}>
          {'>'}
        </button>
      </div>
    </div>
  );
}

export default SearchResults;*/

