import React from 'react';
import MoviesList from './MoviesList';

function MovieCategory({ title, category }) {
  return (
    <div className="movie-category">
      <h2>{title}</h2>
      <MoviesList category={category} />
    </div>
  );
}

export default MovieCategory;
