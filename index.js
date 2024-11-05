import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional, based on your styling
import App from './app.jsx'; // Make sure App.jsx exists in the same directory

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
