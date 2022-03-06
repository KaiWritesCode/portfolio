import './App.css';
import Navbar from './components/Nav/Navbar';
import About from './components/About'
import Projects from './components/Projects/Projects';


function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <Projects />
    </div>

  );
}

export default App;
