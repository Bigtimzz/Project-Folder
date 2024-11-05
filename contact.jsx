import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    emailjs.send('service_6x2nat7', 'template_gzb8v6t', templateParams, 'ZlNC1H33nw1E-rSxS4kFq') // Replace with your service ID, template ID, and user ID
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSent(true); // Update state to indicate success
        // Clear the form fields
        setName('timi peters');
        setEmail('tosin65@gmail.com');
        setMessage('hi');
        setError('failed');
      })
      .catch((err) => {
        console.error('Failed to send the email. Error: ', err);
        setError('Failed to send the message. Please try again later.'); // Set error message
      });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      {isSent && <p className="success-message">Your message has been sent successfully!</p>}
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={sendEmail}>
        <input 
          type="text" 
          placeholder="Your Name" 
          required 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          required 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <textarea 
          placeholder="Your Message" 
          required 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
        ></textarea>
        <button type="submit" className="cta-btn">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
