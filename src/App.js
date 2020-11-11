import React from 'react';

import './App.css';
import Nav from './Components/Nav';
import Tweet from './Components/Tweet';

const name = 'Alireza'
const App = ()=>{
  return (
    <div>
      <h1>Hello React</h1>
      <div className="home">
        <Nav/>
        <Tweet me={name}/>
      </div>
    </div>)
}

export default App;
