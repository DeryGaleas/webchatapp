import './App.css';
import React from 'react';
import LoginSystem from './LoginSystem';
import Qr from './Qr.js';

function App() {
  return (
    <div id="mainContainer">
      <LoginSystem/>
      <Qr/>
    </div>
  );
}

export default App;
