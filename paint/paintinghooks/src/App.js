import React from 'react';
import './App.css';
import StateCounter from './components/StateCounter';
import Name from './components/Name';

function App() {
  return (
    <div className="App">
      <h1>Painter</h1>
      <Name/>
      <StateCounter/>

    </div>
  );
}

export default App;
