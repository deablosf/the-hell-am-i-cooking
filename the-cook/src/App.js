import React from 'react';
import './App.css';
import Ingredients from './components/Ingredients';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Hell Am I Cooking?!</h1>
        <h2>When takeout's a No Go</h2>
        
      </header>
      <Ingredients />
    </div>
  );
}

export default App;
