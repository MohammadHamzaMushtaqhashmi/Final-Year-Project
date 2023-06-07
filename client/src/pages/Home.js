import React, { useState } from 'react';
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import MoviesList from '../Components/MoviesList';
import Footer from '../Components/Footer';
import Watchlist from '../Components/WatchList';
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);


function Home() {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, movie]);
  };

  const removeFromWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => prevWatchlist.filter((item) => item.id !== movie.id));
  };

  return (
    <div>
      <div
        className="content-wrapper"
        style={{ margin: '10px', display: 'flex', flexDirection: 'column' }}>
          <Header />
          <HeroSection />
          <MoviesList category="hollywood" addToWatchlist={addToWatchlist} />
          <MoviesList category="bollywood" addToWatchlist={addToWatchlist} />
          <MoviesList category="lollywood" addToWatchlist={addToWatchlist} />
          <Watchlist watchlist={watchlist} removeFromWatchlist={removeFromWatchlist} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

