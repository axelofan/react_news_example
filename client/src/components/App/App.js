import React, { Component } from 'react';
import Feed from '../Feed/Feed.js';
import Header from '../Header/Header.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Feed/>
      </div>
    )
  }
}

export default App;
