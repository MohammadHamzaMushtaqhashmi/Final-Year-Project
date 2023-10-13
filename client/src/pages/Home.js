// Importing necessary modules and components
import React, { useState } from 'react';
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import MoviesList from '../Components/MoviesList';
import Footer from '../Components/Footer';

// Defining the Home component
function Home({ addToWatchlist, loggedInUser, fetchUserData }) {
  // Rendering the home page with a header, hero section, and lists of movies
  return (
    <div>
      <div
        className="content-wrapper"
        style={{ margin: '10px', display: 'flex', flexDirection: 'column' }}
      >
        <Header loggedInUser={loggedInUser} fetchUserData={fetchUserData} />
        <HeroSection addToWatchlist={addToWatchlist} />
        <MoviesList category="Hollywood" addToWatchlist={addToWatchlist} />
        <MoviesList category="Bollywood" addToWatchlist={addToWatchlist} />
        <MoviesList category="Lollywood" addToWatchlist={addToWatchlist}  />
      </div>
      <Footer />
    </div>
  );
}

// Exporting the Home component as the default export
export default Home;
