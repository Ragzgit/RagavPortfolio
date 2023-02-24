import './App.scss';
import './css/font.css';
import Header from './pages/header';
import Intro from './pages/intro';
import About from './pages/about';
import Experience from './pages/experience';
import Skills from './pages/skills';
import Project from './pages/project';
import Education from './pages/education';
import Footer from './pages/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
