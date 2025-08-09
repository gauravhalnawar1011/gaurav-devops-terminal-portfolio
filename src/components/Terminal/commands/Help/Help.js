// import React from 'react';
// import './Help.css';

// const Help = () => {
//   return (
//     <div className="help-command">
//       <h3 className="help-title">Available Commands:</h3>
//       <ul className="help-list">
//         <li><span className="command-name">about</span> - Learn about me</li>
//         <li><span className="command-name">projects</span> - View my projects</li>
//         <li><span className="command-name">skills</span> - See my technical skills</li>
//         <li><span className="command-name">experience</span> - My work experience</li>
//         <li><span className="command-name">contact</span> - How to reach me</li>
//         <li><span className="command-name">education</span> - My educational background</li>
//         <li><span className="command-name">certifications</span> - View my certifications</li>
//         <li><span className="command-name">clear</span> - Clear the terminal</li>
//         <li><span className="command-name">sudo</span> - Show my intro</li>
//         <li><span className="command-name">quote</span> - Get a motivational quote</li>
//         <li><span className="command-name">mission</span> - Show my career mission</li>
//         <li><span className="command-name">ascii</span> - Show ASCII logo</li>
//       </ul>
//     </div>
//   );
// };

// export default Help;

import React, { useState, useEffect, useRef } from 'react';
import './Help.css';

const lines = [
  "Available commands:",
  "About           - Learn about me",
  "Projects        - View my projects",
  "Skills          - See my technical skills",
  "Experience      - My work experience",
  "Contact         - How to reach me",
  "Education       - My educational background",
  "Certifications  - View my certifications",
  "Sudo            - Show my intro",
  "Quote           - Get a motivational quote",
  "Mission         - Show my career mission",
  "Ascii           - Show ASCII logo",
  "Wget            - Download resume",
  "Clear           - Clear the terminal"

];

const Help = () => {
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
    <div className="help-command">
      <h2 className="help-title">Help</h2>
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

export default Help;