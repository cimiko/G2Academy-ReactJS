import './App.css';
import React, { Component } from 'react';
import { Body } from 'ui-kit/Organism'
import Backvid from 'backvid.mp4'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [],
      page: 1
    }
  }

  fetchApi = () => {
    fetch(`https://swapi.dev/api/people/?page=${this.state.page}`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({ person: res.results })
      })
  }

  onPrev = async () => {
    if (this.state.page >= 1) {
      await this.setState({ page: this.state.page - 1 })
      console.log(this.state.page);
    }
    this.fetchApi()
  }

  onNext = async () => {
    await this.setState({ page: this.state.page + 1 })
    console.log(this.state.page);
    this.fetchApi()
  }

  componentDidMount() {
    this.fetchApi()
  }

  render() {
    const { person, page } = this.state

    return (
      <div className="App">
        {/* <Header /> */}
        <Body person={person} page={page} fetchApi={this.fetchApi} onPrev={this.onPrev} onNext={this.onNext} />
        <video className='videoTag' autoPlay loop muted>
          <source src={Backvid} type='video/mp4' />
        </video>
      </div>
    );
  }
}


export default App;
