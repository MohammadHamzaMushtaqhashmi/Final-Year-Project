import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import MovieCategories from './MoviesCategory';
/*import MoviesCategory from './MoviesCategory'; */

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      < MovieCategories />
  </div>
  );
}

export default Home;