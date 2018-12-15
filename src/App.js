import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SlideBar from './components/Slidebar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SlideBar />
      </div>
    );
  }
}

export default App;
