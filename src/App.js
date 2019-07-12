import React from 'react';
import './App.css';
import { CyberjunkMap } from './cyberjunk-map';
import locationsByName from './locationsByName';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CyberjunkMap locationsByName={locationsByName} />
      </header>
    </div>
  );
}


export default App;
