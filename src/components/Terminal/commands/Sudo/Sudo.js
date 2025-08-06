// import React from 'react';
// import './Sudo.css';

// const Sudo = () => {
//   return (
//     <div className="sudo-command">
//       <p className="sudo-line">✨ Access granted ✨</p>
//       <p className="sudo-line">Hi, I'm Manthan Sinojiya, a DevOps Engineer.</p>
//       <p className="sudo-line">Welcome to advanced terminal mode.</p>
//     </div>
//   );
// };

// export default Sudo;

import React, { useState, useEffect, useRef } from 'react';
import './Sudo.css';  

const lines = [
  "✨ Access granted ✨",
  "Hi, I'm Manthan Sinojiya, a DevOps Engineer.",
  "Welcome to advanced terminal mode."
];

const Sudo = () => {
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
    <div className="sudo-command">
      <h2 className="sudo-title">Sudo</h2>
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

export default Sudo;
