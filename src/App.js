import './App.css';
import Navbar from './components/Nav/Navbar';
import About from './components/About'
import Projects from './components/Projects/Projects';
import HeroSection from './components/Hero/HeroSection'


function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <HeroSection />
      <Projects />
      <About />
    </div>

  );
}

export default App;
