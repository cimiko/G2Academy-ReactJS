import './App.css';
import React, { Component } from 'react';
import { Body } from 'ui-kit/Organism'
import Backvid from 'backvid.mp4'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Body test="COBA AJA SIH!!" />
        <video className='videoTag' autoPlay loop muted>
          <source src={Backvid} type='video/mp4' />
        </video>
      </div>
    );
  }
}


export default App;
