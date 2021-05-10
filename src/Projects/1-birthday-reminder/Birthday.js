import React, { useState } from 'react';
import data from './data';
import List from './List';
import './Birthday.css';

function Birthday () {
  const [people, setPeople] = useState(data);
  return (
    <div className="birthday-card">
      <h1>{ people.length } Birthdays Today</h1>
      <List people = {people}/>
      <button onClick = {() => setPeople([])} className="card-button"> Clear All </button>
    </div>
    
  )
}
export default Birthday;