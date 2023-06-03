import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/movieslist.css';

function MovieList({ category }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(`/movies/${category}`);
        setMovies(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, [category]);

  return (
    <div>
      <h2>{category}</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;