import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Birthday from "./Projects/1-birthday-reminder/Birthday";
import ToursMain from "./Projects/2-tours/ToursMain";
import ReviewsMain from "./Projects/3-Reviews/ReviewsMain";

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
            <li>
              <NavLink to="/ToursMain">Our Tours</NavLink>
            </li> 
            <li>
              <NavLink to="ReviewsMain">Our Reviews</NavLink>
            </li>
          </ul>
          <hr/>
          <Switch>
            <Route exact path="/" />
            <Route exact path="/Birthday" component={Birthday} /> 
            <Route exact path="/ToursMain" component={ToursMain} /> 
            <Route exact path="/ReviewsMain" component={ReviewsMain} />           
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;