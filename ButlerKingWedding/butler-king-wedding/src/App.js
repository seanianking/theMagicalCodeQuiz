import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Jumbotron/>
    </div>
  );
}

export default App;
