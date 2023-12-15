import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import FlipCoin from './Components/FlipCoin';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <FlipCoin />
  </React.StrictMode>
);
