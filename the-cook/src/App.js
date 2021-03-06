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
    <div>
    <Router>
      <div>
      <header className="App-header">
      <h1>The Hell Am I Cooking?!</h1>
        <h2>When takeout's a No Go</h2>
        <div className="linkin">
          <div className="topLinks"><Link to="/ingred">By Ingredients</Link></div>
          <div className="topLinks"><Link to="/name">By Dish</Link></div>
          <div className="topLinks"><Link to="/buttons">See what Could Be</Link></div>
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
 
    <div className="footer">
    <p> <a className="footerLinks" href="http://www.recipepuppy.com/">powered by puppyrecipe</a></p>
            <p><a className="footerLinks" href="https://github.com/deablosf">Built by Sam</a></p>
    </div>



  </div>
  );
}

export default App;
