import './App.css';
import React, { Component } from 'react';
import { Body } from 'ui-kit/Organism'
import Backvid from 'backvid.mp4'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [],
      page: 1,
      dataLength: 0
    }
  }

  fetchApi = () => {
    fetch(`https://swapi.dev/api/people/?page=${this.state.page}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ person: res.results })
      })
  }

  componentDidMount() {
    this.fetchApi()
    this.dataLength()
  }

  // componentDidUpdate(prevProps, prevState) {
  //   this.fetchApi()
  // }

  dataLength = async () => {
    await fetch(`https://swapi.dev/api/people/`)
      .then(res => res.json())
      .then(res => {
        this.setState({ dataLength: Math.ceil(res.count / 10) })
      })
  }

  onPrev = async () => {
    if (this.state.page >= 1) {
      await this.setState({ page: this.state.page - 1 })
    }
    this.fetchApi()
  }

  onNext = async () => {
    await this.setState({ page: this.state.page + 1 })
    this.fetchApi()
  }


  render() {
    const { person, page, dataLength } = this.state

    return (
      <div className="App">
        <Body person={person} page={page} dataLength={dataLength} fetchApi={this.fetchApi} onPrev={this.onPrev} onNext={this.onNext} />
        <video className='videoTag' autoPlay loop muted>
          <source src={Backvid} type='video/mp4' />
        </video>
      </div>
    );
  }
}


export default App;
