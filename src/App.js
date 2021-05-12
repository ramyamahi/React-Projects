import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Birthday from "./Projects/1-birthday-reminder/Birthday";
import ToursMain from "./Projects/2-tours/ToursMain";
import ReviewsMain from "./Projects/3-Reviews/ReviewsMain";
import QuestionsMain from "./Projects/4-Questions/QuestionsMain";
import MenuMain from "./Projects/5-menu/MenuMain";
import TabsMain from "./Projects/6-tabs/TabsMain";
import SliderMain from "./Projects/7-slider/SliderMain";

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
              <NavLink to="/ReviewsMain">Our Reviews</NavLink>
            </li>
            <li>
              <NavLink to="/QuestionsMain">Questions & Answers</NavLink>
            </li>
            <li>
              <NavLink to="/MenuMain">Our Menu</NavLink>
            </li>
            <li>
              <NavLink to="/TabsMain">Tabs</NavLink>
            </li>
            <li>
              <NavLink to="/SliderMain">Slider</NavLink>
            </li>
          </ul>
          <hr/>
          <Switch>
            <Route exact path="/" />
            <Route exact path="/Birthday" component={Birthday} /> 
            <Route exact path="/ToursMain" component={ToursMain} /> 
            <Route exact path="/ReviewsMain" component={ReviewsMain} />  
            <Route exact path="/QuestionsMain" component={QuestionsMain} />  
            <Route exact path="/MenuMain" component={MenuMain} />  
            <Route exact path="/TabsMain" component={TabsMain} />  
            <Route exact path="/SliderMain" component={SliderMain} />   
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;