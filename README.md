
# Portfolio Terminal

[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/Manthan-Sinojiya/Portfolio/main.yml)](https://github.com/Manthan-Sinojiya/Portfolio/actions)
[![Docker Image Version (latest semver)](https://img.shields.io/docker/v/manthansinojiya/portfolio-terminal?label=Docker%20Image)](https://hub.docker.com/r/manthansinojiya/portfolio-terminal/tags)
[![Docker Image Size](https://img.shields.io/docker/image-size/manthansinojiya/portfolio-terminal)](https://hub.docker.com/r/manthansinojiya/portfolio-terminal)

An interactive terminal-style portfolio built with **React.js**, containerized using **Docker**, and powered by a **CI/CD pipeline on GitHub Actions**. Explore my DevOps skills, projects, and experience in a command-line interface format.

---

## 📑 Table of Contents

- [Features](#features)
- [Available Commands](#available-commands)
- [Deployment](#deployment)
  - [Docker Deployment](#docker-deployment)
  - [Manual Setup](#manual-setup)
- [CI/CD Pipeline](#cicd-pipeline)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🚀 Features

- 🖥️ Interactive terminal emulator with command parsing  
- 📂 Portfolio sections navigable via terminal commands  
- 🎨 Cyberpunk-themed UI with animations and color contrast  
- 🔒 Clipboard access disabled for security ([MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API))  
- 🐳 Docker containerization for consistent deployment  
- 🔄 CI/CD pipeline using GitHub Actions for automation  

---

## 💻 Available Commands

| Command          | Description                          |
|------------------|--------------------------------------|
| `help`           | Show available commands              |
| `about`          | Display professional bio             |
| `projects`       | Show featured projects               |
| `skills`         | List technical skills                |
| `experience`     | View work history                    |
| `contact`        | Get contact information              |
| `education`      | Show academic background             |
| `certifications` | View professional certifications     |
| `clear`          | Clear the terminal                   |
| `sudo`           | Show admin greeting                  |
| `quote`          | Display inspirational quote          |
| `mission`        | Show career mission statement        |
| `ascii`          | Display ASCII art logo               |

---

## 📦 Deployment

### 🔧 Docker Deployment

> [Install Docker](https://docs.docker.com/get-docker/) if you haven’t already.

1. **Pull the image:**
   ```bash
   docker pull manthansinojiya/portfolio-terminal:latest
   ```

2. **Run the container:**
   ```bash
   docker run -p 3000:80 -d manthansinojiya/portfolio-terminal
   ```

3. **Access the site:**  
   [http://localhost:3000](http://localhost:3000)

### 🛠️ Manual Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/Manthan-Sinojiya/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm start
   ```

---

## 🔁 CI/CD Pipeline

> Powered by [GitHub Actions](https://docs.github.com/en/actions)

### On each push to the `main` branch:

- ✅ Runs unit tests  
- 🔧 Builds and tags Docker image  
- 📤 Pushes to Docker Hub as:
  - `latest`
  - `git-SHA` (commit-based version)

### Docker Hub Repository

- 📦 [https://hub.docker.com/r/manthansinojiya/portfolio-terminal](https://hub.docker.com/r/manthansinojiya/portfolio-terminal)

---

## 🧰 Technology Stack

- **Frontend**: React.js, CSS3
- **Containerization**: Docker
- **CI/CD**: GitHub Actions
- **Web Server**: Nginx
- **Container Registry**: Docker Hub
- **Build Tool**: npm

---

## 📁 Project Structure

```
portfolio-terminal/
├── .github/workflows/
│   └── main.yml # CI/CD pipeline
├── src/
│   ├── components/
│   │   └── PortfolioTerminal.js
│   ├── App.js
│   └── index.js
├── public/
│   ├── index.html
│   └── profile.png
├── Dockerfile
├── nginx.conf
└── package.json
```
---
