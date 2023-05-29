import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/movieslist.css';

function MoviesList({title,category}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${category}?api_key=499d99db6ce23991d21afde0deede0f1`
      );
      setMovies(response.data.results);
    };
    fetchData();
  }, [title, category]);

  const handleScrollClick = () => {
    // Add code to scroll the .movies-container div horizontally
    const container = document.querySelector('.movies-container');
    container.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="movies-list">
      <div className="movies-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
      <button className="scroll-button" onClick={handleScrollClick}>
        {'>'}
      </button>
    </div>
  );
}

export default MoviesList;
