import React, { useState, useEffect, useRef } from 'react';
import './Sudo.css';  

const lines = [
  "✨ Access granted ✨",
  "Hi, I'm Gaurav Halnawar, a DevOps Engineer with 2 years of hands-on experience.",
  "Specialized in AWS Cloud, CI/CD automation, containerization, and infrastructure as code.",
  "I help organizations streamline deployments, improve system reliability, and optimize cloud infrastructure.",
  "Welcome to advanced terminal mode."
];

const Sudo = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [typedLines, setTypedLines] = useState([]);
  const [currentText, setCurrentText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
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
      <div ref={scrollRef} />
    </div>
  );
};

export default Sudo;
