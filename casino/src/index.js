import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Components/Home';
import Navbar from './Components/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
  </React.StrictMode>
);
