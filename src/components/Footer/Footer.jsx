import React from 'react';
import './Footer.css';

import github from '../../assets/icons/github.svg';
import instagram from '../../assets/icons/instagram.svg';
import linkedln from '../../assets/icons/linkedln.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">© 2024 All rights reserved.</div>
      <nav className="nav">
        <a href="https://www.linkedin.com/in/ho%C3%A0ng-ng%E1%BB%8Dc-minh-tr%C3%AD-273001339/" className="nav-link">
          <img src={linkedln} alt="LinkedIn" className="nav-icon" />
          <span className="nav-text">LinkedIn</span>
          <span className="nav-text">/</span>
        </a>
        <a href="https://github.com/hnmtri204" className="nav-link">
          <img src={github} alt="Github" className="nav-icon" />
          <span className="nav-text">Github</span>
          <span className="nav-text">/</span>
        </a>
        <a href="https://www.instagram.com/_hnmtrii.20_/" className="nav-link">
          <img src={instagram} alt="Instagram" className="nav-icon" />
          <span className="nav-text">Instagram</span>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
