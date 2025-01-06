import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="100%" height="100%">
          <path d="M12 21a9 9 0 100-18 9 9 0 000 18zM8 12h8M12 8v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h2 className="heading">
        <strong>Tell me about your next</strong><br />
        <strong>project</strong>
      </h2>
      <div className="button-group">
        <button className="button">Email Me</button>
        <button className="button button-outline">WhatsApp</button>
      </div>
    </section>
  );
};

export default Contact;
