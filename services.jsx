import React from 'react';

const Services = () => {
  const serviceList = [
    { title: 'Consulting', description: 'Expert business consulting services to drive success.' },
    { title: 'Marketing', description: 'Innovative marketing strategies to grow your brand.' },
    { title: 'Technology', description: 'Advanced tech solutions tailored to your business needs.' }
  ];

  return (
    <section id="services" className="services">
      <h2 className="services-heading">
        <span className="highlight-our">Our</span> 
        <span className="highlight-services"> Services</span>
      </h2>
      <div className="service-cards">
        {serviceList.map((service, index) => (
          <div key={index} className="card">
            <h3 className="card-title">{service.title}</h3>
            <p className="card-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
