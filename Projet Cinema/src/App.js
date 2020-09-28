import React from 'react';
import './App.css';
import Cinema from './Cinema';
import Ville from './Ville';

function App() {
  return (
    <div className="App">

      <aside>
        <Ville/>
      </aside>
      <Cinema ville/>
    </div>
  );
}

export default App;
