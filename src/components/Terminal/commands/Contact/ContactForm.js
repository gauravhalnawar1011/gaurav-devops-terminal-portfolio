// import React, { useState } from 'react';
// import './ContactForm.css'; // We'll create this CSS file

// const ContactForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       // Here you would typically send the data to your backend
//       // For now, we'll just simulate a successful submission
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       setSubmitMessage('✓ Message sent successfully! I will contact you soon.');
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         message: ''
//       });
      
//       // Optionally close the form after delay
//       setTimeout(() => {
//         onClose();
//       }, 3000);
//     } catch (error) {
//       setSubmitMessage('✗ Error sending message. Please try again later.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="contact-form-container">
//       <div className="contact-form-header">
//         <h3>Contact Manthan Sinojiya</h3>
//         <button onClick={onClose} className="close-form-btn">X</button>
//       </div>
      
//       <form onSubmit={handleSubmit} className="terminal-form">
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="phone">Phone (optional):</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             rows="4"
//           />
//         </div>
        
//         <button 
//           type="submit" 
//           disabled={isSubmitting}
//           className="submit-btn"
//         >
//           {isSubmitting ? 'Sending...' : 'Send Message'}
//         </button>
        
//         {submitMessage && (
//           <div className={`submit-message ${submitMessage.startsWith('✓') ? 'success' : 'error'}`}>
//             {submitMessage}
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Message from Portfolio',
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
      const response = await fetch('http://localhost:3001/send-email', {
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

      setSubmitMessage('✓ Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Message from Portfolio',
        message: ''
      });
      
      // After successful submission
    setSubmitMessage('✓ Message sent successfully! I will contact you soon.');
    setTimeout(() => {
      onClose(); // This triggers the focus return
    }, 3000);
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage(`✗ ${error.message || 'Connection failed. Try again later.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-header">
        <h3>Contact Form</h3>
        <button onClick={onClose} className="close-form-btn">✕</button>
      </div>
      
      <form onSubmit={handleSubmit} className="terminal-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
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