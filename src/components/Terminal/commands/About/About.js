// import React from 'react';
// import './About.css';
// // import '../../styles/animations.css';

// const About = () => {
//   return (
//     <div className="about-command">
//       <h3 className="about-title">About Me</h3>
//       <p className="about-text">
//         I'm Manthan Sinojiya, a passionate DevOps Engineer.
//       </p>
//       <p className="about-text">
//         Recent BCA graduate with practical experience in DevOps tools such as Docker, Kubernetes, and AWS.
//       </p>
//       <p className="about-text">
//         Familiar with Linux administration, version control with Git, and automating deployments via CI/CD pipelines.
//       </p>
//       <p className="about-text">
//         Eager to contribute to a fast-paced DevOps environment by learning continuously and applying cloud-native principles.
//       </p>
//     </div>
//   );
// };

// export default About;

import React, { useState, useEffect, useRef } from 'react';
import './About.css';

const lines = [
  "I'm Manthan Sinojiya, a passionate DevOps Engineer.",
  "Recent BCA graduate with practical experience in Docker, Kubernetes, and AWS.",
  "Familiar with Linux, Git, and CI/CD pipeline automation.",
  "Eager to contribute and grow in a cloud-native DevOps environment."
];

const About = () => {
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
    <div className="about-command">
      <h2 className="about-title">About Me</h2>
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

export default About;
