// import React from 'react';
// import './Experience.css';

// const Experience = () => {
//   return (
//     <div className="experience-command">
//       <h3 className="experience-title">Work Experience</h3>
      
//       <div className="experience-item">
//         <h4 className="job-title">Intern DevOps, Nexasoft Infotech, Surat</h4>
//         <p className="job-duration">May 2024 – July 2024</p>
//         <ul className="job-description">
//           <li>Hands-on experience with Linux system administration, Docker containerization, and Kubernetes orchestration</li>
//           <li>Familiar with cloud computing concepts, including core services, deployments, and basic CI/CD workflows</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Experience;

import React, { useState, useEffect, useRef } from 'react';
import './Experience.css';

const lines = [
  "Intern DevOps, Nexasoft Infotech, Surat (May 2024 – July 2024)",
  "- Hands-on experience with Linux system administration, Docker containerization, and Kubernetes orchestration. Familiar with cloud computing concepts, including core services, deployments, and basic CI/CD workflows."
];

const Experience = () => {
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
    <div className="experience-command">
      <h2 className="experience-title">Experience </h2>
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

export default Experience;
