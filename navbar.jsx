import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navbar = ({ onRegisterClick, onLoginClick }) => {
  return (
    <nav className="navbar">
      <div className="logo">CROWNPRINCE PROPERTIES</div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#services">Services</a></li>
      </ul>
      <div className="navbar-right">
        <span className="contact-info">+234 912 500 0558</span>
        <div className="social-icons">
          <a href="#facebook"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#twitter"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#instagram"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        {/* Login and Register buttons */}
        <button className="cta-btn" onClick={onLoginClick}>Login</button>
        <button className="cta-btn register-btn" onClick={onRegisterClick}>Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
