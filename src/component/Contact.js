import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import './Contact.css'; // Create this CSS file for styling
import Navbar from './Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');

    const templateParams = {
      from_name: formData.name,
      to_name: "Recipient Name", // This can be your own name or leave it blank
      message: formData.message,
      reply_to: formData.email,
    };

    try {
      const response = await emailjs.send('service_3bevckr', 'template_f4ajfgs', templateParams, 'EjrYktWWlFs_IGE_K');
      console.log('Email sent successfully!', response.status, response.text);
      setSuccess(true);
    } catch (err) {
      console.error('Failed to send email. Error:', err);
      setError('Failed to send the message. Please try again later.');
    } finally {
      setLoading(false);
      // Reset form data after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          {loading && <p>Sending...</p>}
          {success && <p>Email sent successfully!</p>}
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label>Name:</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-field">
              <label>Email:</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-field">
              <label>Message:</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTY4aURSfxDPNIWn6PJXt9MOGrKZoSeR0RA&s" alt="Contact Us" />
        </div>
      </div>
    </>
  );
};

export default Contact;