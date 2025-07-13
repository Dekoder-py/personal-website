import './App.css';
import { useEffect, useRef } from 'react';

function App() {
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

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
    const projectObserver = new IntersectionObserver(
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
            projectObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll('.skill');
            skillItems.forEach((skill, index) => {
              setTimeout(() => {
                skill.classList.add('skill-animate-in');
              }, index * 100); // Stagger animation by 100ms
            });
            // Disconnect after animating to prevent re-triggering
            skillsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Check if elements are already in view when component mounts
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
          projectObserver.observe(projectsRef.current);
        }
      }

      if (skillsRef.current) {
        const rect = skillsRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // If skills section is already visible, trigger animation immediately
        if (rect.top < windowHeight && rect.bottom > 0) {
          const skillItems = skillsRef.current.querySelectorAll('.skill');
          skillItems.forEach((skill, index) => {
            setTimeout(() => {
              skill.classList.add('skill-animate-in');
            }, index * 100);
          });
        } else {
          // Otherwise, set up the observer
          skillsObserver.observe(skillsRef.current);
        }
      }
    };

    // Small delay to ensure DOM is ready
    setTimeout(checkIfInView, 100);

    return () => {
      projectObserver.disconnect();
      skillsObserver.disconnect();
    };
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
        I am currently participating in the Hack Club Summer of Making 2025.
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
            <a href="https://github.com/Dekoder-py/PygamePlatformer" target="_blank" rel="noopener noreferrer">🐍 Pygame Platformer</a>
            <div className="project-description">A work in progress 2D platformer written purely in python with pygame-ce. I haven't come up with a name yet!</div>
            <div className="project-technologies">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Pygame</span>
            </div>
          </div>
        </div>
        
        <h2>My Skills</h2>
        <div className="skills" ref={skillsRef}>
          <span className="skill">Python</span>
          <span className="skill">Pygame</span> 
          <span className="skill">Godot</span> 
          <span className="skill">Java</span>
          <span className="skill">Linux</span>
          <span className="skill">Bash</span>
          <span className="skill">Git</span>
        </div>
      </main>
    </div>
  );
}

export default App;
