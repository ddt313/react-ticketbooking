import React from 'react';
import './App.css';

import MovInfor from './components/mov-infor'
import TimeLocation from './components/time-location'

function App() {
  return (
    <div className="App">
      <header className="header"></header>
      <MovInfor />
      <TimeLocation />
    </div>
  );
}

export default App;
