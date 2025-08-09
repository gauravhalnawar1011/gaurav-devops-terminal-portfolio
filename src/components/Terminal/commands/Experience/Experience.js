import React, { useState, useEffect, useRef } from 'react';
import './Experience.css';

const lines = [
  // Equip9
  "AWS DevOps Engineer, Equip9 (Oct 2023 – Present) - Pune, Maharashtra",
  "- Reduced AWS billing by 30% by automating EC2 shutdowns, optimizing Glue jobs, and redirecting CloudWatch logs to S3.",
  "- Rebuilt cloud infrastructure using Terraform to support modular, version-controlled deployments with zero-downtime rollouts.",
  "- Migrated microservices to Amazon EKS, improving scalability, auto-healing, and deployment reliability.",
  "- Implemented OpenVPN for secure access to internal resources, enhancing remote team productivity.",
  "- Automated CI/CD pipelines using Jenkins and GitHub Actions, reducing manual deployment time by 70%.",
  "- Created branch-per-feature strategy in Bitbucket with JIRA integration, ensuring traceable and secure changes.",
  "- Integrated Slack for alerting, releases, and cross-team collaboration via automated notifications.",
  "- Offloaded high-volume DB read operations to replicas and optimized search queries, improving API response times.",

  // Vinsys
  "Cloud Application Developer, Vinsys (Jun 2023 – Oct 2023) - Pune, Maharashtra",
  "- Developed and deployed cloud-native applications on AWS emphasizing scalability, fault tolerance, and cost-efficiency.",
  "- Built CI/CD pipelines using AWS CodePipeline and CodeDeploy to streamline releases and reduce manual effort.",
  "- Automated infrastructure and deployments using Python and Bash, reducing provisioning time by 50%.",
  "- Monitored applications using AWS CloudWatch and X-Ray to enhance observability and reduce downtime.",
  "- Collaborated with cross-functional teams to implement DevOps best practices across staging and production environments."
];

const Experience = () => {
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
    <div className="experience-command">
      <h2 className="experience-title">Experience</h2>
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

export default Experience;
