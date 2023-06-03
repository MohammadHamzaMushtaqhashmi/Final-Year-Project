import React from 'react';
import '../CSS/footer.css';
function Footer() {
  return (
    <div className="footer">
    <div className="inside-footer">
      <div className="footer-container">
        <div className="logopart">
          <h1>Movie Mate</h1>
          <img src="images/logo/e.png" alt="" />
        </div>
        <div className="copyright">
          <p>copyright © <span>Shmmi </span>,All Rights Reserved-2021.</p>
        </div>
        <div className="socials">
          <i className="fab fa-facebook-square" />
          <i className="fab fa-youtube" />
          <i className="fab fa-instagram" />
          <i className="fab fa-pinterest" />                    
        </div>
        <div className="btn4">
          <a href>Subscribe Now</a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Footer;
