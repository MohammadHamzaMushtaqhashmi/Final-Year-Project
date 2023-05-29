import React from 'react';

function HeroSection() {
  return (
    <div className="hero">
      <img
        src="/images/cover.jpg"
        alt="MovieMate"
        style={{ width: '100%', height: '500px', objectFit: 'cover' }}
      />
    </div>
  );
}

export default HeroSection;
