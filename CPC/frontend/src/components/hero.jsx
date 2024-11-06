import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      {/* Property Logo */}
      <div className="property-logo">
        <img src="/img/introbg.png" alt="Crownprince Logo" />
      </div>
      
      <div className="hero-content">
        <h1 className="hero-heading">
          <span className="highlight-welcome">Welcome to</span> 
          <span className="highlight-properties"> Crownprince Properties</span>
        </h1>
        <p>Your trusted partner in growth.</p>
        <a href="#about" className="cta-btn">Learn More</a> {/* Link to #about */}
      </div>
    </section>
  );
}

export default Hero;
