import './App.css';
import Navbar from './components/Nav/Navbar';
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects';
import HeroSection from './components/Hero/HeroSection'
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
      <Navbar />
      <div className='wrapper'>
        <HeroSection />
        <Projects />
        <Skills />
        <Blogs />
        <Contact />
      </div>
      <Footer />
    </>

  );
}

export default App;
