import React from 'react';
import '../CSS/movieslist.css';

function Watchlist({ watchlist, removeFromWatchlist }) {
  return (
    <div>
      <h2>Watchlist</h2>
      <div className="movies-list">
        <div className="movies-container">
          {watchlist.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} style={{ height: '300px' }} />
              <h3 style={{ height: '40px', zIndex: 1 }}>{movie.title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <button onClick={() => removeFromWatchlist(movie)}>
                  Remove from Watchlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Watchlist;