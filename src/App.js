import './App.css';
import Navbar from './components/Nav/Navbar';
import About from './components/About/About'
import Projects from './components/Projects/Projects';
import HeroSection from './components/Hero/HeroSection'


function App() {
  return (
    <>
      <Navbar />
      <div className='wrapper'>
        <HeroSection />
        <Projects />
        <About />
      </div>
    </>

  );
}

export default App;
