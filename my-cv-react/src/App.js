import './App.css';
import React, { Component } from 'react'
import { Body, Footer, Header } from './templates';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  }
}

export default App;
