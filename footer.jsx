import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/img/introbg.png" alt="Terra Developers Logo" />
          <h2>CROWNPRINCE PROPERTIES</h2>
          <p className="footer-phone">+234 912 500 0558</p>
        </div>
        
        <div className="footer-info">
          <p><strong>FIND US:</strong></p>
          <p>LAGOS: The Shoppes, 8A Ikogosi Road, Oniru, VI</p>
          <p>ABUJA: Suite 112, Ammari Plaza, Ahmadu Bello Way, Jahi District</p>
          <p><strong>OPENING HOURS:</strong> 9:00AM — 5:00PM</p>
        </div>
        
        <div className="footer-social">
          <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 Crownprince ltd. All Rights Reserved.</p>
        <p>Built by Tech O'Clock</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">FAQs</a>
        </div>
      </div>

      {showBackToTop && (
        <div className="back-to-top" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </footer>
  );
};

export default Footer;
