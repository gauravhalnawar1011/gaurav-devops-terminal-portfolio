import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';

const lines = [
  "Email: gauravhalnawar0506@gmail.com",
  "Phone: +91-8308074216",
  "LinkedIn: https://www.linkedin.com/in/gaurav-halnawar",
  "GitHub: https://github.com/gauravhalnawar1011"
];

// Function to format a line, making links clickable
const formatLine = (line) => {
  const linkRegex = /^(LinkedIn:|GitHub:)\s*(.*)/;
  const match = line.match(linkRegex);

  if (match) {
    const linkText = match[1];
    const url = match[2];
    return (
      <>
        {linkText} <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
      </>
    );
  }
  return line;
};

const Contact = () => {
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
          setTypedLines((prev) => [...prev, lines[currentLine]]); // store full original line
          setCurrentText('');
          setCharIndex(0);
          setCurrentLine((prev) => prev + 1);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, currentLine]);

  return (
    <div className="contact-command">
      <h2 className="contact-title">Contact</h2>
      {typedLines.map((line, idx) => (
        <div key={idx} className="typing-line">{formatLine(line)}</div>
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

export default Contact;
