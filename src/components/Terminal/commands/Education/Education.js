// import React from 'react';
// import './Education.css';

// const Education = () => {
//   return (
//     <div className="education-command">
//       <h3 className="education-title">Education</h3>
      
//       <div className="education-item">
//         <h4 className="institution">Uka Tarsadia University, Bardoli</h4>
//         <p className="degree">Bachelor of Computer Applications (BCA)</p>
//         <p className="duration">2022–2025</p>
//       </div>
//     </div>
//   );
// };

// export default Education;

import React, { useState, useEffect, useRef } from 'react';
import './Education.css';

const lines = [
  "Uka Tarsadia University, Bardoli (2022–2025)",
  "Bachelor of Computer Applications (BCA)"
];

const Education = () => {
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
    <div className="education-command">
      <h2 className="education-title">Education</h2>
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

export default Education;
