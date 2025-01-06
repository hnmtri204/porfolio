import React, { useEffect, useState } from 'react';
import './Header.css';

import github from '../../assets/icons/github.svg';
import instagram from '../../assets/icons/instagram.svg';
import linkedln from '../../assets/icons/linkedln.svg';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <div className="email-container">
        {isMobile ? (
          <button
            className="email-button"
            onClick={() => window.location.href = 'mailto:hoangngocminhtri.k22@gmail.com'}
          >
            Email
          </button>
        ) : (
          <a href="mailto:hoangngocminhtri.k22@gmail.com" className="email-link">
            hoangngocminhtri.k22@gmail.com
          </a>
        )}
        <a href="https://link_to_your_cv.com" className="contact-button">CV</a>
      </div>
      <nav className="nav">
        <a href="https://www.linkedin.com/in/ho%C3%A0ng-ng%E1%BB%8Dc-minh-tr%C3%AD-273001339/" className="nav-link" target="_blank" rel="noopener noreferrer">
          <span className="nav-text">LinkedIn</span>
          <span className="separator">/</span>
          <img src={linkedln} alt="LinkedIn" className="nav-icon" />
        </a>
        <a href="https://github.com/hnmtri204" className="nav-link" target="_blank" rel="noopener noreferrer">
          <span className="nav-text">GitHub</span>
          <span className="separator">/</span>
          <img src={github} alt="GitHub" className="nav-icon" />
        </a>
        <a href="https://www.instagram.com/_hnmtrii.20_/" className="nav-link" target="_blank" rel="noopener noreferrer">
          <span className="nav-text">Instagram</span>
          <img src={instagram} alt="Instagram" className="nav-icon" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
