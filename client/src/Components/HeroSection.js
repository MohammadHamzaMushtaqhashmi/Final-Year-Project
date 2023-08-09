// Importing necessary modules and components
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../CSS/hero.css';

// Defining the HeroSection component
function HeroSection() {
  // Setting up state for the movie data
  const [movies, setMovies] = useState([]);

  // Defining a function to fetch movie data from the TMDB API
  const fetchMovies = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=499d99db6ce23991d21afde0deede0f1'
    );    
    const data = await response.json();
    setMovies(data.results);
  };

  // Fetching movie data when the component mounts
  useEffect(() => {
    fetchMovies();
  }, []);

  // Defining settings for the Slider component
const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};
// Rendering the hero section with a carousel of movie posters
return (
  <section className="hero-section">
  
    {movies && (
      <Slider {...settings}>
        {movies.map((movie) => (
          movie.poster_path && (
            <div className='img' key={movie.id}>
              <img className='img1'
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          )
        ))}
      </Slider>
    )}
  </section>
);


}

// Exporting the HeroSection component as the default export
export default HeroSection;

/*
// Importing necessary modules
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../CSS/hero.css';

// Defining the HeroSection component
function HeroSection() {
  // Rendering the hero section
  return (
    <section>
      <div className="heropage">
        <div className="inside-heropage">
          <span>NOW STREAMING</span>
          <div className="line1"></div>
          <h1>Movie Lovers</h1>
          <p>Action,Drama,Comedy,Horror,Romantic</p>
          <div className="btn1">
            <a href>
              <i className="fas fa-play" />Watch Now
            </a>
            <a href>
              <i className="fas fa-heart" />Watch Later
            </a>
          </div>
        </div>
      </div>
      <div className="poster">
        <img src="./images/cover.jpg" alt="cover" />
      </div>
    </section>
  );
}

// Exporting the HeroSection component as the default export
export default HeroSection;
*/