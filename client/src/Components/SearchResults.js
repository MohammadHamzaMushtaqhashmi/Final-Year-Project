 // Importing necessary modules
import React from 'react';
import '../CSS/movieslist.css';

// Defining the SearchResults component
function SearchResults({ searchResults, addToWatchlist }) {
  // Defining a function to play the trailer for a movie
  const playTrailer = (movie) => {
    // Add your code here to handle playing the trailer for a movie
  };

  // Defining a function to handle clicks on the scroll buttons
  const handleScrollClick = (direction) => {
    const container = document.querySelector('.movies-container');
    if (direction === 'left') {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    } else if (direction === 'right') {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Rendering the list of search results with scroll buttons
  return (
    <div>
      <div className="movies-list">
        <button className="scroll-button" onClick={() => handleScrollClick('left')}>
          {'<'}
        </button>
        <div className="movies-container">
          {searchResults.map((result) => (
            <div key={result.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                alt={result.title}
                style={{ height: '300px' }}
              />
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

// Exporting the SearchResults component as the default export
export default SearchResults;
