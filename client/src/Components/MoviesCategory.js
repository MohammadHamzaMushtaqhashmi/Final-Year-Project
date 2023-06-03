import React from 'react';
import MovieList from './MoviesList';

function MovieCategories() {
  return (
    <div>
      <MovieList category="hollywood" />
      <MovieList category="bollywood" />
      {/* Add additional MovieList components here for other categories */}
    </div>
  );
}

export default MovieCategories;
