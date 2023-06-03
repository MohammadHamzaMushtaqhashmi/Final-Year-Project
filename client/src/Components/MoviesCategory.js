import React from 'react';

import MovieList from './MoviesList';


function MovieCategories() {
  return (
    <div>
      <MovieList category="hollywood" />
      <MovieList category="bollywood" />
      <MovieList category="lollywood"/>
      {/* Add additional MovieList components here for other categories */}
    </div>
  );
}

export default MovieCategories;
