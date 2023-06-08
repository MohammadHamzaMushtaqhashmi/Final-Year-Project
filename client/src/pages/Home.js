import React, { useState } from 'react';
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import MoviesList from '../Components/MoviesList';
import Footer from '../Components/Footer';




function Home({addToWatchlist}) {
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
      </div>
      <Footer />
    </div>
  );
}

export default Home;