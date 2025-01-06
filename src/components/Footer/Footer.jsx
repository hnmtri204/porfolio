import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">© 2024 All rights reserved.</div>
      <nav className="nav">
        <a href="#" className="nav-link">LinkedIn</a>
        <a href="#" className="nav-link">Dribbble</a>
        <a href="#" className="nav-link">Instagram</a>
      </nav>
    </footer>
  );
};

export default Footer;