import React, { useEffect, useState } from 'react';

const About = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const videoElement = document.querySelector("#about-video");

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };

    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  useEffect(() => {
    const videoElement = document.querySelector("#about-video");

    if (videoElement) {
      if (isVisible) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  }, [isVisible]);

  const toggleSound = () => {
    const videoElement = document.querySelector("#about-video");
    if (videoElement) {
      videoElement.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Video Section */}
        <div className="about-video">
          <video
            id="about-video"
            width="100%"
            height="315"
            muted={isMuted}
            className="video-with-border" // Add a class for styling the border
            loop
          >
            <source src="/img/crownprincetvid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Sound Toggle Button */}
          <button onClick={toggleSound} className="sound-toggle-btn">
            {isMuted ? 'Unmute' : 'Mute'}
          </button>
        </div>

        {/* Text Section */}
        <div className="about-text">
          <h2 className="about-heading">
            <span className="highlight-our">About</span> 
            <span className="highlight-services"> Us</span>
          </h2>
          <h3>Welcome to <span>Crownprince Properties</span></h3>
          <p>
            Crownprince Properties presents a world of luxurious properties that combine comfort, style, and functionality. As a leading real estate development company in Nigeria, we bring years of expertise to create apartments that wow our buyers and investors.
          </p>
          <p>
            With extra focus on functionality, efficiency, and unparalleled customer experience, our homes are designed to cater to the diverse needs of our esteemed clients.
          </p>
          <p>
            At Terra, we take pride in ensuring you <span>live the good life!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
