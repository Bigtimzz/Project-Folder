import React, { useState } from 'react';

const BookingRentForm = () => {
  const [formData, setFormData] = useState({
    propertyType: 'House',
    transactionType: 'Rent',
    location: '',
    budget: '',
    moveInDate: '',
    additionalInfo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data
    console.log('Form Submitted', formData);
    alert('Your request has been submitted. We will get back to you soon.');
  };

  return (
    <section id="booking-rent-form" className="booking-rent-form">
      <h2>Book or Rent a Property</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        {/* Property Type */}
        <div className="form-group">
          <label htmlFor="propertyType">Property Type</label>
          <select
            id="propertyType"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleInputChange}
          >
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Land">Land</option>
          </select>
        </div>

        {/* Transaction Type */}
        <div className="form-group">
          <label htmlFor="transactionType">Transaction Type</label>
          <select
            id="transactionType"
            name="transactionType"
            value={formData.transactionType}
            onChange={handleInputChange}
          >
            <option value="Rent">Rent</option>
            <option value="Buy">Buy</option>
          </select>
        </div>

        {/* Location */}
        <div className="form-group">
          <label htmlFor="location">Preferred Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Enter preferred location"
            required
          />
        </div>

        {/* Budget */}
        <div className="form-group">
          <label htmlFor="budget">Budget</label>
          <input
            type="number"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            placeholder="Enter your budget (₦)"
            required
          />
        </div>

        {/* Move-in Date */}
        <div className="form-group">
          <label htmlFor="moveInDate">Move-in Date</label>
          <input
            type="date"
            id="moveInDate"
            name="moveInDate"
            value={formData.moveInDate}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Additional Information */}
        <div className="form-group">
          <label htmlFor="additionalInfo">Additional Information</label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            placeholder="Provide any additional information"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </section>
  );
};

export default BookingRentForm;
