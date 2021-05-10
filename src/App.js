import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Birthday from "./Projects/1-birthday-reminder/Birthday";

class App extends Component {
  state = {    
  } 
  
  render() {    
    return (    
      <Router>
        <div>        
          <ul>
            <li>
              <NavLink to="/Birthday">Birthday Reminder</NavLink>
            </li>      
          </ul>
          <hr/>
          <Switch>
            <Route exact path="/" />
            <Route exact path="/Birthday" component={Birthday} />            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;