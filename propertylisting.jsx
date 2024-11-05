import React, { useRef } from 'react';

const properties = [
  {
    id: 1,
    title: 'Carmen\'s Creek',
    description: 'FROM ₦40,000,000',
    image: '/img/ff6.jpg',
  },
  {
    id: 2,
    title: 'Paul\'s Creek',
    description: 'FROM ₦85,000,000',
    image: '/img/ff4.jpg',
  },
  {
    id: 3,
    title: 'Zaarah\'s Place',
    description: 'FROM ₦29,000,000',
    image: '/img/ff3.jpg',
  },
  {
    id: 4,
    title: 'Eric\'s Park',
    description: 'FROM ₦65,000,000',
    image: '/img/bungalow.jpg',
  },
 
  // Add more properties if needed
];

const PropertyListing = () => {
  const scrollRef = useRef(null);

  // Scroll to the left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  // Scroll to the right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="property-listing" className="property-listing">
      <div className="container">
        {/* Explore Our Projects Heading */}
        <div className="explore-section">
          <h2 className="explore-heading">Explore <span>Our</span> Projects</h2>
          <p className="section-subtitle">
            Embrace a life of comfort, convenience, and sophistication as you choose the perfect apartment that resonates with your vision of a truly exceptional living experience.
          </p>
        </div>

        <div className="property-cards-container">
          <div className="scroll-arrow left-arrow" onClick={scrollLeft}>
            &#8592;
          </div>

          <div className="property-cards" ref={scrollRef}>
            {properties.map((property) => (
              <div className="property-card" key={property.id}>
                <div className="image-container">
                  <img src={property.image} alt={property.title} />
                  <div className="explore-overlay">
                    <button className="explore-btn">Explore</button>
                  </div>
                </div>
                <h3>{property.title}</h3>
                <p>{property.description}</p>
              </div>
            ))}
          </div>

          <div className="scroll-arrow right-arrow" onClick={scrollRight}>
            &#8594;
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyListing;
