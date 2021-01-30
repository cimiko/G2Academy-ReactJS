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
      dataLength: 0,
      number: 0,
      dataRow: 0
    }
  }

  fetchApi = () => {
    fetch(`https://swapi.dev/api/people/?page=${this.state.page}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ person: res.results, dataRow: res.results.length })
      })
  }

  componentDidMount() {
    this.fetchApi()
    this.dataLength()
    this.index()
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.page !== this.state.page){
      this.fetchApi()
    }
  }

  index = () => {
    if(this.state.page === 1){
        this.setState({number: this.state.number + 1})
    }
}

  dataLength = async () => {
    await fetch(`https://swapi.dev/api/people/`)
      .then(res => res.json())
      .then(res => {
        this.setState({ dataLength: Math.ceil(res.count / res.results.length) })
      })
  }

  onPrev = async () => {
    if (this.state.page >= 1) {
      await this.setState({ page: this.state.page - 1, number: this.state.number - this.state.dataRow })
    }
  }

  onNext = async () => {
    await this.setState({ page: this.state.page + 1, number: this.state.number + this.state.dataRow })
  }


  render() {
    const { person, page, dataLength, number } = this.state

    return (
      <div className="App">
        <Body person={person} page={page} dataLength={dataLength} fetchApi={this.fetchApi} onPrev={this.onPrev} onNext={this.onNext} number={number} />
        <video className='videoTag' autoPlay loop muted>
          <source src={Backvid} type='video/mp4' />
        </video>
      </div>
    );
  }
}


export default App;
