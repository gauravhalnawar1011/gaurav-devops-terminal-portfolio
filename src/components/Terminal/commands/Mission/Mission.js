// import React from 'react';
// import './Mission.css';

// const Mission = () => {
//   return (
//     <div className="mission-command">
//       <h3 className="mission-title">Career Mission</h3>
//       <p className="mission-statement">
//         To build secure, scalable, and automated cloud solutions that empower businesses and developers.
//       </p>
//     </div>
//   );
// };

// export default Mission;

import React, { useState, useEffect, useRef } from 'react';
import './Mission.css';
const lines = [
 "To build secure, scalable, and automated cloud solutions that empower businesses and developers."
];

const Mission = () => {
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
    <div className="mission-command">
      <h2 className="mission-title">Mission</h2>
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

export default Mission;
