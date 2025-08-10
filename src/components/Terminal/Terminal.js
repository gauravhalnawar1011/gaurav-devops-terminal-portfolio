import React, { useState, useEffect, useRef } from 'react';
import './Terminal.css';
import './styles/animations.css';
import './styles/holographic.css';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import profileImage from '../../profile.png';
import wood from '../../wood.png';
import { OrbitControls, Environment } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import IDCard from './idcard';
import resumeFile from '../../Gaurav_Halnawar_Resume.pdf'; // Adjust path as needed
import ContactForm from './commands/Contact/ContactForm';


// Import command components
import Help from './commands/Help/Help';
import About from './commands/About/About';
import Projects from './commands/Projects/Projects';
import Skills from './commands/Skills/Skills';
import Experience from './commands/Experience/Experience';
import Contact from './commands/Contact/Contact';
import Education from './commands/Education/Education';
import Certifications from './commands/Certifications/Certifications';
import Sudo from './commands/Sudo/Sudo';
import Quote from './commands/Quote/Quote';
import Mission from './commands/Mission/Mission';
import Ascii from './commands/Ascii/Ascii';

const PROMPT = 'gaurav@portfolio:~$';

const PortfolioTerminal = () => {
  const [history, setHistory] = useState([{
    text: " Welcome\n Hi, I'm Gaurav Halnawar, a DevOps Engineer.\n Welcome to my interactive portfolio terminal!\n Type 'help' to see available commands.",
    type: 'system'
  }]);
  const [input, setInput] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [commandIndex, setCommandIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);
  const [showContactForm, setShowContactForm] = useState(false);
   const user = { name: 'Gaurav Halnawar' };
  const nodes = {
    card: {
      geometry: new THREE.PlaneGeometry(1.6, 2.25),
    },
  };

  // Command components mapping
  const commandComponents = {
    help: <Help />,
    about: <About />,
    projects: <Projects />,
    skills: <Skills />,
    experience: <Experience />,
    contact: <Contact />,
    education: <Education />,
    certifications: <Certifications />,
    sudo: <Sudo />,
    quote: <Quote />,
    mission: <Mission />,
    ascii: <Ascii />,
    idcard: <IDCard />,
    wget: 'Download resume...',
    'contact-form': <ContactForm onClose={() => setShowContactForm(false)} />

  };

const simulateTyping = (text, callback) => {
    setIsTyping(true);
    let i = 0;
    const speed = 20;
    const output = [];
    const typingId = Date.now();
    
    const type = () => {
      if (i < text.length) {
        output.push(text.charAt(i));
        setHistory(prev => {
          const newHistory = [...prev];
          const typingIndex = newHistory.findIndex(item => item.type === 'typing');
          if (typingIndex !== -1) {
            newHistory[typingIndex] = {
              text: output.join(''),
              type: 'typing',
              id: typingId
            };
          }
          return newHistory;
        });
        i++;
        setTimeout(type, speed);
      } else {
        setIsTyping(false);
        if (callback) callback();
      }
    };
    
    type();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  useEffect(() => {
    if (!isTyping && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isTyping]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    // In your handleCommand function, add this condition:
if (cmd === 'contact-form') {
  setShowContactForm(true);
  return;
}

    if (cmd === 'clear') {
      setHistory([{
        text: " Welcome\n Hi, I'm Gaurav Halnawar, a Devops Engineer.\n Welcome to my interactive portfolio terminal!\n Type 'help' to see available commands.",
        type: 'system'
      }]);
      setInput('');
      return;
    }

        if (cmd === 'contact-form') {
      setShowContactForm(true);
      setInput(''); // Clear the command line immediately
      return;
    }

    if (!cmd) return;

    setCommandHistory(prev => [...prev, cmd]);
    setCommandIndex(prev => prev + 1);

    setHistory(prev => [
      ...prev,
      {
        text: `${input}`,
        type: 'command'
      },
      {
        text: '',
        type: 'typing',
        id: Date.now()
      }
    ]);

    setInput('');
    
    // In your handleCommand function, add this condition before the command not found check:
if (cmd.startsWith('wget')) {
  const filename = cmd.split(' ')[1];
  if (filename && filename.toLowerCase().includes('resume')) {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Gaurav_Halnawar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setHistory(prev => {
      const newHistory = [...prev];
      const typingIndex = newHistory.findIndex(item => item.type === 'typing');
      if (typingIndex !== -1) {
        newHistory[typingIndex] = {
          text: 'Downloading resume...\nResume downloaded successfully!',
          type: 'output'
        };
      }
      return newHistory;
    });
    return;
  } else {
    setHistory(prev => {
      const newHistory = [...prev];
      const typingIndex = newHistory.findIndex(item => item.type === 'typing');
      if (typingIndex !== -1) {
        newHistory[typingIndex] = {
          text: 'Error: Only resume download is supported. Use "wget resume"',
          type: 'error'
        };
      }
      return newHistory;
    });
    return;
  }
}
    if (commandComponents[cmd]) {
      simulateTyping(commandComponents[cmd], () => {
        setHistory(prev => {
          const newHistory = [...prev];
          const typingIndex = newHistory.findIndex(item => item.type === 'typing');
          if (typingIndex !== -1) {
            newHistory[typingIndex] = {
              text: commandComponents[cmd],
              type: 'output'
            };
          }
          return newHistory;
        });
      });
    } else {
      const errorMsg = `bash: ${cmd}: command not found\n\nI can only provide information about Gaurav Halnawar from his portfolio.`;
     simulateTyping(errorMsg, () => {
       setHistory(prev => {
         const newHistory = [...prev];
         const typingIndex = newHistory.findIndex(item => item.type === 'typing');
         if (typingIndex !== -1) {
           newHistory[typingIndex] = {
             text: errorMsg,
             type: 'error'
           };
         }
         return newHistory;
       });

      });
    }
  };
  useEffect(() => {
      const handleGlobalKeyDown = (e) => {
        if (e.ctrlKey && (e.key === 'c' || e.key === 'v')) {
          if (e.target !== inputRef.current) {
            e.preventDefault();
            const action = e.key === 'c' ? 'copy' : 'paste';
            const warningMessage = {
              text: `\n⚠️ Security: ${action} is disabled in this environment.\nUse terminal commands instead.`,
              type: 'error'
            };
            
            document.body.classList.add('security-warning');
            setTimeout(() => {
              document.body.classList.remove('security-warning');
            }, 500);
  
            setHistory((prev) => [...prev, warningMessage]);
          }
        }
      };
  
      document.addEventListener('keydown', handleGlobalKeyDown);
      return () => document.removeEventListener('keydown', handleGlobalKeyDown);
      
    }, []);
    
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isTyping) return;
      
      if (e.key === 'ArrowUp' && commandHistory.length > 0) {
        e.preventDefault();
        const newIndex = Math.max(commandIndex - 1, 0);
        setCommandIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else if (e.key === 'ArrowDown' && commandHistory.length > 0) {
        e.preventDefault();
        const newIndex = Math.min(commandIndex + 1, commandHistory.length - 1);
        setCommandIndex(newIndex);
        setInput(newIndex === commandHistory.length - 1 ? '' : commandHistory[newIndex]);
      }
      else if (e.key === 'Tab') {
        e.preventDefault();
        const inputLower = input.toLowerCase();
        const matching = Object.keys(commandComponents).filter(cmd =>
          cmd.startsWith(inputLower)
        );

        if (matching.length === 1) {
          setInput(matching[0]);
        } else if (matching.length > 1) {
          setHistory(prev => [
            ...prev,
            {
              text: `\nPossible completions:\n${matching.join('    ')}`,
              type: 'output'
            }
          ]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [commandHistory, commandIndex, isTyping, input]);

  return (
    <div className="terminal-container">
      <div className="cyberpunk-bg">
        <div className="grid-lines"></div>
        <div className="scanlines"></div>
      </div>

      <div className="header-bar">
        <h4>Gaurav Halnawar</h4>
        <p>DevOps Engineer</p>
      </div>
      
      <div className="sidebar">
     <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 5, 5]} intensity={1.2} />
      <Physics gravity={[0, -9.81, 0]}>
        <IDCard />
      </Physics>
    </Canvas>
    
      </div>
      
      <div className="terminal">
        <nav className="nav-links">
          Help | About | Projects | Skills | Experience | Contact | Education | Certifications | Sudo | Quote | Mission | Ascii | Wget | Clear
        </nav>
        
        <div className="terminal-body">
          {history.map((item, idx) => (
            <div 
              key={`${idx}-${item.id || ''}`} 
              className={`terminal-line ${item.type}`}
            >
              {item.type === 'command' ? (
                <div className="command-line">
                  <span className="command-prompt">{PROMPT}</span>
                  <span className="command-text">{item.text}</span>
                </div>
              ) : item.type === 'typing' ? (
                <div className="typing-line">
                  <span className="command-prompt">{PROMPT}</span>
                  <span className="typing-text">{item.text}</span>
                  <span className="typing-cursor"></span>
                </div>
              ) : item.component ? (
                <div className="component-output">
                  {item.component}
                </div>
              ) : (
                <div className={`text-output ${item.type}`}>
                  {item.text}
                </div>
              )}
            </div>
          ))}
          {showContactForm && (
  <div className="terminal-line">
    <ContactForm onClose={() => setShowContactForm(false)} />
  </div>
)}

          {showContactForm && (
            <div className="terminal-line">
              <ContactForm onClose={() => {
                setShowContactForm(false);
                setInput(''); // Clear the command line
                setTimeout(() => inputRef.current?.focus(), 100); // Refocus with slight delay
              }} />
            </div>
          )}
          <form onSubmit={handleCommand} className="command-input">
            <span className="command-prompt">{PROMPT}</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
              className="terminal-input"
              disabled={isTyping}
            />
            {isTyping && <span className="typing-cursor"></span>}
          </form>
          <div ref={terminalEndRef} />
        </div>
        
        <footer className="terminal-footer">
          <span className="command-prompt">{PROMPT}</span>
          <span className="timestamp">{currentTime.toLocaleString()}</span>
        </footer>
      </div>
    </div>
  );
};

export default PortfolioTerminal;