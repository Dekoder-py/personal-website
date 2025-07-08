import './App.css';

function App() {
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
        I mostly code in python, and I'm currently learning pygame and Java.
        </p>
      </header>
      <div className="scroll-indicator">
        <div className="scroll-arrow">↓</div>
      </div>
      <main className="App-body">
        <h2>My Links</h2>
        <ul>
          <li><a href="https://github.com/dekoder-py" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://dekoder-py.itch.io">itch.io</a></li>
          <li><a href="https://pypi.org/user/dekoder-py/">PyPI</a></li>
        </ul>

        <h2>My Projects</h2>
        <div className="projects">
          <div className="project">
            <a href="https://pypi.org/project/restless-dungeon/" target="_blank" rel="noopener noreferrer">🐍 Restless Dungeon</a>
            <div className="project-description">Text-based adventure game built with Python. Explore dungeons, fight monsters, and level up your character!</div>
          </div>
          <div className="project">
            <a href="https://dekoder-py.itch.io/platform-kingdom" target="_blank" rel="noopener noreferrer">👑 Platform Kingdom</a>
            <div className="project-description">2D platformer game built in Godot. Jump, run, and collect coins in this fun adventure!</div>
          </div>
          <div className="project">
            <a href="https://github.com/Dekoder-py/GuessTheNumber" target="_blank" rel="noopener noreferrer">🎯 Guess The Number</a>
            <div className="project-description">GUI number guessing game built with Java and JavaFX. Test your luck and logic skills!</div>
          </div>
        </div>
        
        <h2>My Skills</h2>
        <div className="skills">
          <span className="skill">Python</span>
          <span className="skill">Pygame</span>
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
