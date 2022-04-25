import './App.css';
import { useEffect } from 'react'
import Navbar from './components/Nav/Navbar';
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects';
import HeroSection from './components/Hero/HeroSection'
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'
import ReactGa from "react-ga"



function App() {

  useEffect(() => {
    ReactGa.initialize("G-H92ZWEH5ZT")
    ReactGa.pageview('/')
  }, [])

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

export default App
