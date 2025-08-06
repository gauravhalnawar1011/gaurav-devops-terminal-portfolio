// import React from 'react';
// import './Skills.css';

// const Skills = () => {
//   return (
//     <div className="skills-command">
//       <h3 className="skills-title">Technical Skills</h3>
      
//       <div className="skills-category">
//         <h4 className="category-title">Programming:</h4>
//         <p className="category-items">PHP, JavaScript, HTML, CSS, Python</p>
//       </div>

//       <div className="skills-category">
//         <h4 className="category-title">Libraries / Frameworks:</h4>
//         <p className="category-items">React.js, Node.js, Bootstrap, Kubernetes</p>
//       </div>

//       <div className="skills-category">
//         <h4 className="category-title">Tools / Platforms:</h4>
//         <p className="category-items">Git, GitHub, Docker, Jenkins, AWS, GCP, Linux, Bash, CI/CD Pipeline, Postman</p>
//       </div>

//       <div className="skills-category">
//         <h4 className="category-title">Databases:</h4>
//         <p className="category-items">MySQL, MongoDB</p>
//       </div>

//       <div className="skills-category">
//         <h4 className="category-title">Deployment:</h4>
//         <p className="category-items">Docker Compose, Kubernetes (kubectl), GitHub Actions</p>
//       </div>

//       <div className="skills-category">
//         <h4 className="category-title">Soft Skills:</h4>
//         <p className="category-items">Leadership, Flexibility, Problem Solving, Time Management, Willingness to learn, Teamwork</p>
//       </div>
//     </div>
//   );
// };

// export default Skills;

import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const lines = [
  "Programming: PHP, JavaScript, HTML, CSS, Python",
  "Libraries / Frameworks: React.js, Node.js, Bootstrap, Kubernetes",
  "Tools / Platforms: Git, GitHub, Docker, Jenkins, AWS, GCP, Linux, Bash, CI/CD Pipeline, Postman",
  "Databases: MySQL, MongoDB\nDeployment: Docker Compose, Kubernetes (kubectl), GitHub Actions",
  "Soft Skills: Leadership, Flexibility, problem solving, Time Management, willingness to learn, Teamwork"
];

const Skills = () => {
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
    <div className="skills-command">
      <h2 className="skills-title">Skills</h2>
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

export default Skills;
