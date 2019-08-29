import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <h1>What is Lorem?</h1>
      <body>
        <p>Lorem Ipsum</p>
      </body>
    </div>
  );
}

export default App;
