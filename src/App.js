import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Home from './Containers/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Home/>
      </div>
    );
  }
}

export default App;
