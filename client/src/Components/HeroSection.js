import React, {  } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../CSS/hero.css'

function HeroSection() {
  return (
  <section>
    <div className="heropage">
      <div className="inside-heropage">
        <span>NOW STREAMING</span>
          <div className="line1"></div>
            <h1>Movie Lovers</h1>
            <p>Action,Drama,Comedy,Horror,Romantic</p>
            <div className="btn1">
              <a href><i className="fas fa-play" />Watch Now</a>
              <a href><i className="fas fa-heart" />Watch Later</a>
            </div>
          </div>
      </div>
    <div className="poster">
      <img src="./images/cover.jpg" alt="cover" />
    </div>
  </section>
  );
}

export default HeroSection;
