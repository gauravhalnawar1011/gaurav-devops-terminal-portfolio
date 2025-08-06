// import React from 'react';
// import './Certifications.css';

// const Certifications = () => {
//   return (
//     <div className="certifications-command">
//       <h3 className="certifications-title">Certifications</h3>
      
//       <ul className="certifications-list">
//         <li>Linux for Beginners - Infosys</li>
//         <li>Docker Training - Infosys</li>
//         <li>AWS DevOps Engineer - Infosys</li>
//       </ul>
//     </div>
//   );
// };

// export default Certifications;

import React, { useState, useEffect, useRef } from 'react';
import './Certifications.css';

const lines = [
"- Linux for Beginners - Infosys",
"- Docker Training - Infosys",
"- AWS DevOps Engineer - Infosys"
];

const Certifications = () => {
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
    <div className="certification-command">
      <h2 className="certification-title">Certification</h2>
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

export default Certifications;