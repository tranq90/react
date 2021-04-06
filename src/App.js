import React, { Component } from 'react';
import Person from './Person/Person.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <Person />
        <Person />
        <Person />
      </div>
    );
  }
}

export default App;
