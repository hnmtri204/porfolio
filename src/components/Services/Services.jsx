import React from 'react';
import { services } from '../../data';
import './Services.css';

const Services = () => {
  return (
    <section className="services">
      <h2 className="services-heading">
        Collaborate with brands and agencies to<br />
        create impactful results.
      </h2>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
