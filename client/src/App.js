import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import MoviesCategory from './Components/MoviesCategory';
import Footer from './Components/Footer';
function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <MoviesCategory title="Popular Movies" category="popular" />
      <MoviesCategory title="Top Rated Movies" category="top_rated" />
      <MoviesCategory title="Upcoming Movies" category="upcoming" />
      <Footer/>
    {/* Add other page content here */}
  </div>
  );
}

export default App;
