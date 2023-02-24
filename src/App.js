import './App.scss';
import './css/font.css';
import Header from './pages/header';
import Intro from './pages/intro';
import About from './pages/about';
import Experience from './pages/experience';
import Skills from './pages/skills';
import Project from './pages/project';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Project />
    </div>
  );
}

export default App;
