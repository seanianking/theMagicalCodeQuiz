import React from 'react';
import './App.css';
import Playground from './components/Playground';
import Name from './components/Name';

function App() {
  return (
    <div className="App">
      <h1>Painter</h1>
      <Name/>
      <Playground/>

    </div>
  );
}

export default App;
