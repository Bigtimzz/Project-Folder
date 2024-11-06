import React from "react";


const ParallaxSection = () => {
  return (
    <section className="parallax-section">
      <div className="parallax-overlay">
        <h2>LET'S TAKE YOU HOME...</h2>
        <p>SEND US A MESSAGE</p>
        <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
          CHAT WITH US ON WHATSAPP
        </a>
      </div>
    </section>
  );
};

export default ParallaxSection;
