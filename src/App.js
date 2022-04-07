import { useEffect } from 'react';
import './App.css';
import Navbar from './compontents/Navbar/Navbar';
import Home from './compontents/Home/Home';
import About from './compontents/About/About';
import Projects from './compontents/Projects/Projects';
import Testimonials from './compontents/Testimonials/Testimonials';
import Contact from './compontents/Contact/Contact';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
