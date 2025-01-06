import React from 'react';
import avatarImage from '../../assets/anh2.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="avatar">
        <img src={avatarImage} alt="Profile avatar" className="avatar-image" />
      </div>
      <h1 className="heading">
        <strong>Hello! I am Minh Tris</strong><br />
        <span className="highlight">A website programmer</span><br />
        <strong>experience.</strong>
      </h1>
      <button className="button">Latest Work</button>
    </section>
  );
};

export default Hero;
