import React, { useState, useEffect, useRef } from 'react';
import './Ascii.css';

const lines = [
  `
 ██████╗  █████╗ ██╗   ██╗██████╗  █████╗ ██╗   ██╗
██╔════╝ ██╔══██╗██║   ██║██╔══██╗██╔══██╗██║   ██║
██║  ███╗███████║██║   ██║██████╔╝███████║██║   ██║
██║   ██║██╔══██║██║   ██║██╔══██╗██╔══██║╚██╗ ██╔╝
╚██████╔╝██║  ██║╚██████╔╝██║  ██║██║  ██║ ╚████╔╝ 
 ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  
  `
];

const Ascii = () => {
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
        }, 5);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTypedLines((prev) => [...prev, currentText]);
          setCurrentText('');
          setCharIndex(0);
          setCurrentLine((prev) => prev + 1);
        }, 300);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, currentLine, currentText]);

  return (
    <div className="ascii-command">
      {typedLines.map((line, idx) => (
        <pre key={idx} className="typing-line">{line}</pre>
      ))}
      {currentLine < lines.length && (
        <pre className="typing-line">
          {currentText}
          <span className="typing-cursor" />
        </pre>
      )}
      <div ref={scrollRef} />
    </div>
  );
};

export default Ascii;
