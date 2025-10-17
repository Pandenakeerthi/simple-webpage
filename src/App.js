import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Contact />
      <footer className="footer">© {new Date().getFullYear()} My Simple React Webpage</footer>
    </div>
  );
}

export default App;
