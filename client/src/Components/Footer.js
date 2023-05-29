import React from 'react';

const footerStyles = {
  padding: '20px',
  backgroundColor: '#333',
  color: 'white'
};

const ulStyles = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex'
};

const liStyles = {
  margin: '0 10px'
};

const linkStyles = {
  color: 'white',
  textDecoration: 'none'
};

function Footer() {
  return (
    <footer style={footerStyles}>
      <ul style={ulStyles}>
        <li style={liStyles}><a href="/about" style={linkStyles}>About</a></li>
        <li style={liStyles}><a href="/contact" style={linkStyles}>Contact</a></li>
        <li style={liStyles}><a href="/terms" style={linkStyles}>Terms of Service</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
