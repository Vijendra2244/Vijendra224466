
import './App.css';
import About from './assets/pages/About';
import Contact from './assets/pages/Contact';
import Home from './assets/pages/Home';
import Project from './assets/pages/Project';
import Skills from './assets/pages/Skills';
import Navbar from './section/Navbar/Navbar';

function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   <About/>
   <Skills/>
   <Project/>
   <Contact/>
   </>
  );
}

export default App;
