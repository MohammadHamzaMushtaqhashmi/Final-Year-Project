import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../CSS/hero.css'
function Hero() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=499d99db6ce23991d21afde0deede0f1`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
};

  const handleMovieClick = (movieId) => {
    // Add code to navigate to a new page with more information about the movie
    window.location.href = `/movie/${movieId}`;
  };

  return (
    <div className="hero">
        <Slider {...settings}>
            {movies.map((movie) => (
                <div key={movie.id} onClick={() => handleMovieClick(movie.id)}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <h2>{movie.title}</h2>
                </div>
            ))}
        </Slider>
        {/* Add other hero section content here */}
    </div>
);

}

export default Hero;
