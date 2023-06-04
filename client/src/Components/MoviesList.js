import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/movieslist.css';

const apiKey = '499d99db6ce23991d21afde0deede0f1';
const baseUrl = 'https://api.themoviedb.org/3';

function MoviesList({ category }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const playTrailer = movie => {
    setSelectedMovie(movie);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      let endpoint;
      switch (category) {
        case 'hollywood':
          endpoint = '/movie/popular';
          break;
        case 'bollywood':
          endpoint = '/discover/movie?with_original_language=hi';
          break;
        case 'lollywood':
          endpoint = '/discover/movie?with_original_language=ur';
          break;

        // Add additional cases here for other categories
        default:
          return;
      }
    
      const response = await axios.get(`${baseUrl}${endpoint}`, {
        params: {
          api_key: apiKey
        }
      });
      setMovies(response.data.results);
    };
    fetchData();
  }, [category]);

  const handleScrollClick = direction => {
    const container = document.querySelector(`.movies-container-${category}`);
    if (direction === 'left') {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    } else if (direction === 'right') {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h2>{category}</h2>
      <div className="movies-list">
        <button className="scroll-button" onClick={() => handleScrollClick('left')}>
          {'<'}
        </button>
        <div className={`movies-container movies-container-${category}`}>
          {movies.map(movie => (
            <div key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} style={{ height: '300px' }}/>
            <h3 style={{ height: '40px',  zIndex: 1 }}>{movie.title}</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <button onClick={() => addToWatchlist(movie)}>
                Watchlist <span>+</span>
              </button>
              <button onClick={() => playTrailer(movie)}>
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

export default MoviesList;
