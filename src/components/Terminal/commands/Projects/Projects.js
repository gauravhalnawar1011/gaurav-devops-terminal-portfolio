// import React from 'react';
// import './Projects.css';

// const Projects = () => {
//   return (
//     <div className="projects-command">
//       <h3 className="projects-title">My Projects</h3>
      
//       <div className="project">
//         <h4 className="project-name">1. Future Study Hub</h4>
//         <ul className="project-details">
//           <li>Developed an Advanced E-Learning Platform</li>
//           <li>Scalable System Design</li>
//           <li>Technologies Used: PHP, JavaScript, Ajax, Bootstrap, MySQL</li>
//           <li>Link: <a href="https://futurestudyhub.10001mb.com/?i=1" target="_blank" rel="noopener noreferrer">https://futurestudyhub.10001mb.com/?i=1</a></li>
//           <li>GitHub: <a href="https://github.com/Manthan-Sinojiya/Future-Study-Hub-main" target="_blank" rel="noopener noreferrer">https://github.com/Manthan-Sinojiya/Future-Study-Hub-main</a></li>
//         </ul>
//       </div>

//       <div className="project">
//         <h4 className="project-name">2. RFID-Based Campus Security System</h4>
//         <ul className="project-details">
//           <li>Developed a Secure Identification System</li>
//           <li>Advanced Facial Recognition with DeepFace</li>
//           <li>Technologies Used: React.js, Node.js, MongoDB, Docker</li>
//           <li>GitHub: <a href="https://github.com/Manthan-Sinojiya/RFID---AI-Based-Student-Identification" target="_blank" rel="noopener noreferrer">https://github.com/Manthan-Sinojiya/RFID---AI-Based-Student-Identification</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

const lines = [
  "1. Future Study Hub",
  "- Developed an Advanced E-Learning Platform: Designed and implemented a user-friendly online platform to support academic and career planning for diverse learners.",
"- Scalable System Design: Designed the platform to handle high user traffic and support future scalability for additional courses and features.",
"- Technologies Used: Leveraged tools and technologies such as PHP, JavaScript, Ajax, Bootstrap, MySQL, Html, CSS, etc. for seamless functionality.",
"- Link: https://futurestudyhub.10001mb.com/?i=1",
"- GitHub: https://github.com/Manthan-Sinojiya/Future-Study-Hub-main\n",

"2 RFID-Based Campus Security System",
"- Developed a Secure Identification System: Designed and implemented an RFID based platform to enhance campus security by enabling real-time student status verification and guard authentication.",
"- Advanced Facial Recognition: Incorporated DeepFace for facial comparison, adding an additional layer of security by cross-verifying RFID tags with live facial scans.",
"- Technologies Used: React.js, Node.js, MongoDB, Docker, and the Z11- 13.56MHz RFID Reader for a robust and scalable security solution.",
"- GitHub: https://github.com/Manthan-Sinojiya/RFID---AI-Based-Student-Identification"
];

const Projects = () => {
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
    <div className="projects-command">
      <h2 className="projects-title">Projects</h2>
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

export default Projects;
