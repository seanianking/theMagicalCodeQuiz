import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron'
import Header from './components/Header';
import Announcement from './components/Announcement';

function App() {
  return (
    <div className="App">
      <Header/>
      <Jumbotron/>
      <Announcement/>
    </div>
  );
}

export default App;
