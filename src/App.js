import './App.css';
import Navbar from './components/Nav/Navbar';
import About from './components/About/About'
import Projects from './components/Projects/Projects';
import HeroSection from './components/Hero/HeroSection'
import Blogs from './components/Blogs/Blogs';


function App() {
  return (
    <>
      <Navbar />
      <div className='wrapper'>
        <HeroSection />
        <Projects />
        <About />
        <Blogs />
      </div>
    </>

  );
}

export default App;
