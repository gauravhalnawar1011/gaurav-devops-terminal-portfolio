// import React from 'react';
// import './Contact.css';

// const Contact = () => {
//   return (
//     <div className="contact-command">
//       <h3 className="contact-title">Contact Information</h3>
      
//       <div className="contact-method">
//         <span className="contact-label">Email:</span>
//         <a href="mailto:sinojiyamanthan23@gmail.com" className="contact-value">sinojiyamanthan23@gmail.com</a>
//       </div>

//       <div className="contact-method">
//         <span className="contact-label">Phone:</span>
//         <span className="contact-value">+91-78628 92575</span>
//       </div>

//       <div className="contact-method">
//         <span className="contact-label">LinkedIn:</span>
//         <a href="https://www.linkedin.com/in/manthan-sinojiya" target="_blank" rel="noopener noreferrer" className="contact-value">https://www.linkedin.com/in/manthan-sinojiya</a>
//       </div>

//       <div className="contact-method">
//         <span className="contact-label">GitHub:</span>
//         <a href="https://github.com/Manthan-Sinojiya" target="_blank" rel="noopener noreferrer" className="contact-value">https://github.com/Manthan-Sinojiya</a>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';

const lines = [
"Email: sinojiyamanthan23@gmail.com",
"Phone: +91-78628 92575",
"LinkedIn: https://www.linkedin.com/in/manthan-sinojiya",
"GitHub: https://github.com/Manthan-Sinojiya"

];

const Contact = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [typedLines, setTypedLines] = useState([]);
  const [currentText, setCurrentText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const scrollRef = useRef(null); // ✅ Scroll target ref

  useEffect(() => {
    // Scroll to bottom when new content is typed
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [typedLines, currentText]);

  useEffect(() => {
    if (currentLine < lines.length) {
      if (charIndex < lines[currentLine].length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + lines[currentLine][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 20);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTypedLines((prev) => [...prev, currentText]);
          setCurrentText('');
          setCharIndex(0);
          setCurrentLine((prev) => prev + 1);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, currentLine, currentText]);

  return (
    <div className="contact-command">
      <h2 className="contact-title">Contact</h2>
      {typedLines.map((line, idx) => (
        <div key={idx} className="typing-line">{line}</div>
      ))}
      {currentLine < lines.length && (
        <div className="typing-line">
          {currentText}
          <span className="typing-cursor" />
        </div>
      )}
      {/* ✅ Dummy element to scroll into view */}
      <div ref={scrollRef} />
    </div>
  );
};

export default Contact;
