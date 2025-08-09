import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const PROMPT = 'Gaurav@portfolio:~$';

const commandOutputs = {
  help: `\nAvailable commands:\nabout           - Learn about me\nprojects        - View my projects\nskills          - See my technical skills\nexperience      - My work experience\ncontact         - How to reach me\neducation       - My educational background\ncertifications  - View my certifications\nclear           - Clear the terminal\nsudo            - Show my intro\nquote           - Get a motivational quote\nmission         - Show my career mission\nascii           - Show ASCII logo\n`,

  about: `\nI'm Gaurav Halnawar, a passionate DevOps Engineer.\nRecent BCA graduate with practical experience in DevOps tools such as Docker, Kubernetes, and AWS. Skilled in Linux administration, version control with Git, and automating deployments via CI/CD pipelines. Eager to contribute to a fast-paced DevOps environment by applying cloud-native principles to deliver scalable and reliable systems.`,

  projects: `\n1. Future Study Hub\n- Developed an Advanced E-Learning Platform supporting academic and career planning for diverse learners.\n- Designed for scalability to handle high user traffic and expansion.\n- Technologies: PHP, JavaScript, Ajax, Bootstrap, MySQL, HTML, CSS.\n- Link: https://futurestudyhub.10001mb.com/?i=1\n- GitHub: https://github.com/Halnawar-Gaurav/Future-Study-Hub-main\n\n2. RFID-Based Campus Security System\n- Designed an RFID-based platform to enhance campus security with real-time verification.\n- Added DeepFace facial recognition for dual authentication.\n- Technologies: React.js, Node.js, MongoDB, Docker, Z11-13.56MHz RFID Reader.\n- GitHub: https://github.com/Halnawar-Gaurav/RFID---AI-Based-Student-Identification`,

  skills: `\nProgramming: PHP, JavaScript, HTML, CSS, Python\nFrameworks: React.js, Node.js, Bootstrap, Kubernetes\nTools: Git, GitHub, Docker, Jenkins, AWS, GCP, Linux, Bash, CI/CD Pipelines, Postman\nDatabases: MySQL, MongoDB\nDeployment: Docker Compose, Kubernetes, GitHub Actions\nSoft Skills: Leadership, Flexibility, Problem Solving, Time Management, Teamwork`,

  experience: `\nIntern DevOps Engineer, Nexasoft Infotech, Surat (May 2024 – July 2024)\n- Managed Linux system administration tasks.\n- Built and deployed Docker containers.\n- Worked with Kubernetes for container orchestration.\n- Gained exposure to AWS services and CI/CD workflows.`,

  contact: `\nEmail: GauravHalnawar23@gmail.com\nPhone: +91-78628 92575\nLinkedIn: https://www.linkedin.com/in/Halnawar-Gaurav\nGitHub: https://github.com/Halnawar-Gaurav`,

  education: `\nUka Tarsadia University, Bardoli (2022–2025)\nBachelor of Computer Applications (BCA)`,

  certifications: `\n- Linux for Beginners - Infosys\n- Docker Training - Infosys\n- AWS DevOps Engineer - Infosys`,

  sudo: `\n✨ Access granted ✨\nHi, I'm Gaurav Halnawar, a DevOps Engineer.\nWelcome to advanced terminal mode.`,

  quote: `\n"Success is not the key to happiness. Happiness is the key to success." - Albert Schweitzer`,

  mission: `\nTo build secure, scalable, and automated cloud solutions that empower businesses and developers.`,

  ascii: `\n ███╗   ███╗ █████╗ ███╗   ██╗████████╗██╗  ██╗ █████╗ ███╗   ██╗\n ████╗ ████║██╔══██╗████╗  ██║╚══██╔══╝██║  ██║██╔══██╗████╗  ██║\n ██╔████╔██║███████║██╔██╗ ██║   ██║   ███████║███████║██╔██╗ ██║\n ██║╚██╔╝██║██╔══██║██║╚██╗██║   ██║   ██╔══██║██╔══██║██║╚██╗██║\n ██║ ╚═╝ ██║██║  ██║██║ ╚████║   ██║   ██║  ██║██║  ██║██║ ╚████║\n ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝\n`,
};

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
    // Auto-focus input when not typing
    if (!isTyping && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isTyping]);

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

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (cmd === 'clear') {
      setHistory([{
        text: " Welcome\n Hi, I'm Halnawar Gaurav, a Devops Engineer.\n Welcome to my interactive portfolio terminal!\n Type 'help' to see available commands.",
        type: 'system'
      }]);
      setInput('');
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
    
    if (commandOutputs[cmd]) {
      simulateTyping(commandOutputs[cmd], () => {
        setHistory(prev => {
          const newHistory = [...prev];
          const typingIndex = newHistory.findIndex(item => item.type === 'typing');
          if (typingIndex !== -1) {
            newHistory[typingIndex] = {
              text: commandOutputs[cmd],
              type: 'output'
            };
          }
          return newHistory;
        });
      });
    } else {
      simulateTyping(`Command not found: ${cmd}`, () => {
        setHistory(prev => {
          const newHistory = [...prev];
          const typingIndex = newHistory.findIndex(item => item.type === 'typing');
          if (typingIndex !== -1) {
            newHistory[typingIndex] = {
              text: `Command not found: ${cmd}`,
              type: 'error'
            };
          }
          return newHistory;
        });
      });
    }
  };

  useEffect(() => {
  const handleKeyDown = (e) => {
    if (isTyping) return;
    
    // Command history navigation
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
    // Tab completion
    else if (e.key === 'Tab') {
      e.preventDefault();
      const inputLower = input.toLowerCase();
      const matching = Object.keys(commandOutputs).filter(cmd =>
        cmd.startsWith(inputLower)
      );

      if (matching.length === 1) {
        setInput(matching[0]); // autocomplete
      } else if (matching.length > 1) {
        // show matches
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
        <h4>Halnawar Gaurav</h4>
        <p>DevOps Engineer</p>
      </div>
      <div className="sidebar">
        <div className="holographic-card">
          <div className="holographic-inner">
            <img 
              src="/Portfolio/profile.png" 
              alt="Halnawar Gaurav" 
              className="profile-image" 
            />
            <div className="holographic-grid"></div>
            <div className="holographic-glare"></div>
          </div>
        </div>
        <p className="tag cyber-glitch">[ Gaurav Halnawar ]</p>
      </div>
      <div className="terminal">
        <nav className="nav-links">
          help | about | projects | skills | experience | contact | education | certifications | sudo | quote | mission | ascii | clear
        </nav>
        <div className="terminal-body">
          {history.map((item, idx) => (
            <div 
              key={`${idx}-${item.id || ''}`} 
              className={`terminal-line ${item.type} ${item.type === 'typing' ? 'typing-animation' : ''}`}
            >
              {item.type === 'command' ? (
                <>
                  <span className="command-prompt">{PROMPT}</span>
                  <span className="command-text">{item.text}</span>
                </>
              ) : (
                <span className="line-text">{item.text}</span>
              )}
              {item.type === 'typing' && <span className="typing-cursor">|</span>}
            </div>
          ))}
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
          </form>
          <div ref={terminalEndRef} />
        </div>
        <footer className="terminal-footer" data-testid="terminal-footer">
          <span className="command-prompt">{PROMPT}</span>
          <span className="timestamp">{currentTime.toLocaleString()}</span>
        </footer>
      </div>
    </div>
  );
};

export default PortfolioTerminal;