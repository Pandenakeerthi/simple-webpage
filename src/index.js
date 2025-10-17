import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

// Create a root (this connects React to the HTML <div id="root">)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your main App component inside <React.StrictMode>
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
