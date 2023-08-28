// Importing necessary modules
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faYoutube, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

import '../CSS/footer.css';

// Defining the Footer component
function Footer() {
  // Rendering the footer
  return (
    <div className="footer">
      <div className="inside-footer">
        <div className="footer-container">
          <div className="logopart">
            <h1>MovieMate</h1>
          </div>
          <div className="copyright">
            <p>
              copyright © <span>Shmmi </span>,All Rights Reserved-2021.
            </p>
          </div>
          <div className="socials">
            <a href="https://www.facebook.com/MovieMate" target="_blank" rel="noopener noreferrer" aria-label="Movie Mate on Facebook">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="https://www.youtube.com/MovieMate" target="_blank" rel="noopener noreferrer" aria-label="Movie Mate on YouTube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.instagram.com/MovieMate" target="_blank" rel="noopener noreferrer" aria-label="Movie Mate on Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.pinterest.com/MovieMate" target="_blank" rel="noopener noreferrer" aria-label="Movie Mate on Pinterest">
              <FontAwesomeIcon icon={faPinterest} />
            </a>
          </div>
          <div className="btn4">
            <a href>Subscribe Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exporting the Footer component as the default export
export default Footer;
