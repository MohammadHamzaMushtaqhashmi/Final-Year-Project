// Importing necessary modules and components
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/movieslist.css';

// Defining constants for the API key and base URL
const apiKey = '499d99db6ce23991d21afde0deede0f1';
const baseUrl = 'https://api.themoviedb.org/3';

// Defining the MoviesList component
function MoviesList({ category, addToWatchlist }) {
  // Setting up state for the list of movies and selected movie
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Defining a function to play the trailer for a movie
  const playTrailer = (movie) => {
    setSelectedMovie(movie);
  };

  // Using an effect hook to fetch data from the API when the component mounts or the category changes
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
        default:
          return;
      }

      const response = await axios.get(`${baseUrl}${endpoint}`, {
        params: {
          api_key: apiKey,
        },
      });
      setMovies(response.data.results);
    };
    fetchData();
  }, [category]);

  // Defining a function to handle clicks on the scroll buttons
  const handleScrollClick = (direction) => {
    const container = document.querySelector(`.movies-container-${category}`);
    if (direction === 'left') {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    } else if (direction === 'right') {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Rendering the list of movies with scroll buttons
  return (
    <div>
      <h2>{category}</h2>
      <div className="movies-list">
        <button className="scroll-button" onClick={() => handleScrollClick('left')}>
          {'<'}
        </button>
        <div className={`movies-container movies-container-${category}`}>
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{ height: '300px' }}
              />
              <h3 style={{ height: '40px', zIndex: 1 }}>{movie.title}</h3>
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

// Exporting the MoviesList component as the default export
export default MoviesList;
