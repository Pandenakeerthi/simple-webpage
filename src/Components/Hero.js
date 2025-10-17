import React from 'react';

function Hero() {
  return (
    <section id="hero" className="hero">
      <h2>Welcome to My React Webpage</h2>
      <p>This is a simple webpage built with ReactJS.</p>
      <button onClick={() => alert('You clicked the button!')}>Click Me</button>
    </section>
  );
}

export default Hero;
