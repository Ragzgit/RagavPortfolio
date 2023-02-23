import './App.scss';
import Header from './pages/header';
import Intro from './pages/intro';
import About from './pages/about';
import Experience from './pages/experience';
function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Experience />
    </div>
  );
}

export default App;
