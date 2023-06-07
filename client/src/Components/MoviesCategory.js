import React from 'react';
import MoviesList from './MoviesList';


function MovieCategories() {
  return (
    <div>
      <MoviesList category="hollywood" />
      <MoviesList category="bollywood" />
      <MoviesList category="lollywood"/>
      {/* Add additional MovieList components here for other categories */}
    </div>
  );
}

export default MovieCategories;
