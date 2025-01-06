import React from 'react';
import Marquee from 'react-fast-marquee';
import { brands } from '../../data';
import './Brands.css';

const Brands = () => {
  return (
    <div className="brands">
      <Marquee speed={50} pauseOnHover>
        {brands.map((brand, index) => (
          <div key={index} className="brand-name">
            <span className="brand-text">{brand.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Brands;
