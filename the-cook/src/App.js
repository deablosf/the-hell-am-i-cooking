import React from 'react';
import './App.css';
import Ingredients from './components/Ingredients';
import Names from './components/Names'
import Buttons from './components/Buttons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <header className="App-header">
      <h1>The Hell Am I Cooking?!</h1>
        <h2>When takeout's a No Go</h2>
        <div className="linkin">
          <div><Link to="/ingred">By Ingredients</Link></div>
          <div><Link to="/name">By Name</Link></div>
          <div><Link to="/buttons">See what Could Be</Link></div>
        </div>

        </header>
        <div className="title">

        </div>
         {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.  */}
         <Switch>
          <Route path="/name">
            <Names />
          </Route>
          <Route path="/ingred">
            <Ingredients />
          </Route>
          <Route path="/buttons">
            <Buttons />
          </Route>
        </Switch> 
      </div>
    </Router>

  );
}

export default App;
