import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="email-container">
        <a href="mailto:hoangngocminhtri.k22@gmail.com" className="email-link">
          hoangngocminhtri.k22@gmail.com
        </a>
        <a href="https://link_to_your_cv.com" className="contact-button">CV</a>
      </div>
      <nav className="nav">
        <a href="https://www.linkedin.com/in/ho%C3%A0ng-ng%E1%BB%8Dc-minh-tr%C3%AD-273001339/" className="nav-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>/
        <a href="https://github.com/hnmtri204" className="nav-link" target="_blank" rel="noopener noreferrer">Github</a>/
        <a href="https://www.instagram.com/_hnmtrii.20_/" className="nav-link" target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
    </header>
  );
};

export default Header;
