import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Message from Gaurav\'s Portfolio',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://angular-portfolio-backend.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitMessage('✓ Message sent successfully! I’ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Message from Gaurav\'s Portfolio',
        message: ''
      });
      
      setTimeout(() => {
        onClose(); 
      }, 3000);

    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage(`✗ ${error.message || 'Connection failed. Please try again later.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-header">
        <h3>Contact Me</h3>
        <button onClick={onClose} className="close-form-btn">✕</button>
      </div>
      
      <form onSubmit={handleSubmit} className="terminal-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Phone (optional):</label>
          <input
            type="tel"
            name="phone"
            placeholder="+91-78628 92575"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
          />
        </div>
        
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        
        {submitMessage && (
          <div className={submitMessage.startsWith('✓') ? 'success' : 'error'}>
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
