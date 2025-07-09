import './App.css';
import { useEffect, useRef } from 'react';

function App() {
  const projectsRef = useRef(null);

  const scrollToContent = () => {
    const contentSection = document.querySelector('.App-body');
    if (contentSection) {
      contentSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectCards = entry.target.querySelectorAll('.project');
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in');
              }, index * 150); // Stagger animation by 150ms
            });
            // Disconnect after animating to prevent re-triggering
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    // Also check if the element is already in view when component mounts
    const checkIfInView = () => {
      if (projectsRef.current) {
        const rect = projectsRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // If projects section is already visible, trigger animation immediately
        if (rect.top < windowHeight && rect.bottom > 0) {
          const projectCards = projectsRef.current.querySelectorAll('.project');
          projectCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-in');
            }, index * 150);
          });
        } else {
          // Otherwise, set up the observer
          observer.observe(projectsRef.current);
        }
      }
    };

    // Small delay to ensure DOM is ready
    setTimeout(checkIfInView, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hi! I'm Dekoder-py! 
          <span className="waving-hand">👋🏼</span>
        </h1>
        <p>
        I'm a 15 year old programmer based in New Zealand.
          <br/>
        I mostly code in Python, and I'm currently learning Pygame and Java.
          <br />
        I recently participated in the Hack Club Summer of Making 2025.
        </p>
      </header>
      <div className="scroll-indicator">
        <div className="scroll-arrow" onClick={scrollToContent}>↓</div>
      </div>
      <main className="App-body">
        <h2>My Links</h2>
        <ul>
          <li><a href="https://github.com/dekoder-py" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://dekoder-py.itch.io">itch.io</a></li>
          <li><a href="https://pypi.org/user/dekoder-py/">PyPI</a></li>
        </ul>

        <h2>My Projects</h2>
        <div className="projects" ref={projectsRef}>
          <div className="project">
            <a href="https://pypi.org/project/restless-dungeon/" target="_blank" rel="noopener noreferrer">🐍 Restless Dungeon</a>
            <div className="project-description">Interactive text-based adventure game built with Python.</div>
            <div className="project-technologies">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Rich</span>
            </div>
          </div>
          <div className="project">
            <a href="https://dekoder-py.itch.io/platform-kingdom" target="_blank" rel="noopener noreferrer">👑 Platform Kingdom</a>
            <div className="project-description">2D platformer game built in Godot.</div>
            <div className="project-technologies">
              <span className="tech-tag">Godot</span>
              <span className="tech-tag">GDScript</span>
            </div>
          </div>
          <div className="project">
            <a href="https://github.com/Dekoder-py/GuessTheNumber" target="_blank" rel="noopener noreferrer">🎯 Guess The Number</a>
            <div className="project-description">GUI number guessing game built with Java and JavaFX.</div>
            <div className="project-technologies">
              <span className="tech-tag">Java</span>
              <span className="tech-tag">JavaFX</span>
            </div>
          </div>
          <div className="project">
            <a href="https://github.com/Dekoder-py/personal-website" target="_blank" rel="noopener noreferrer">🌐 Portfolio Website</a>
            <div className="project-description">The website you're viewing right now! Built with React and some help from GitHub Copilot for the animations!</div>
            <div className="project-technologies">
              <span className="tech-tag">React</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">JavaScript</span>
            </div>
          </div>
        </div>
        
        <h2>My Skills</h2>
        <div className="skills">
          <span className="skill" style={{'--skill-delay': '0s'}}>Python</span>
          <span className="skill" style={{'--skill-delay': '0.1s'}}>Pygame</span> 
          <span className="skill" style={{'--skill-delay': '0.2s'}}>Godot</span> 
          <span className="skill" style={{'--skill-delay': '0.3s'}}>Java</span>
          <span className="skill" style={{'--skill-delay': '0.4s'}}>Linux</span>
          <span className="skill" style={{'--skill-delay': '0.5s'}}>Bash</span>
          <span className="skill" style={{'--skill-delay': '0.6s'}}>Git</span>
        </div>
      </main>
    </div>
  );
}

export default App;
