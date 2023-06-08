// In MovieCategories.js
import React from 'react';
import MoviesList from '../Components/MoviesList';

function MovieCategories({ addToWatchlist }) {
  return (
    <div>
      <MoviesList category="hollywood" addToWatchlist={addToWatchlist} />
      <MoviesList category="bollywood" addToWatchlist={addToWatchlist} />
      <MoviesList category="lollywood" addToWatchlist={addToWatchlist} />
    </div>
  );
}

export default MovieCategories;

/*import React from 'react';
import MoviesList from './MoviesList';


function MovieCategories() {
  return (
    <div>
      <MoviesList category="hollywood" />
      <MoviesList category="bollywood" />
      <MoviesList category="lollywood"/>
    </div>
  );
}

export default MovieCategories;*/
