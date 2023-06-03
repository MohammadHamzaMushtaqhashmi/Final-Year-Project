
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import MovieCategories from './MoviesCategory';
import Footer from './Footer';
function Home() {
  return (
    <div>
      <div className="content-wrapper" style={{ margin: '10px',display: 'flex', flexDirection: 'column'  }}>
      <Header />
      <HeroSection />
      <MovieCategories />
      
      </div>
      <Footer />
    </div>
  );
}

export default Home;
