import React, { Component } from 'react';
import './App.css';
import Input from 'ui-kit/Atom/Input';
import Space from 'ui-kit/Atom/Space';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      name: "",
      age: ""
     }
  }

  onChange = e => {
    // console.log(e.target.value);
    this.setState({[e.target.name]: e.target.value})
  }

  render() { 
    const {name, age} = this.state
    return ( 
      <div className="container">
        <Input
        label="Nama" 
        type="text" 
        value={name} 
        placeholder="Input Nama Anda" 
        name="nama" 
        onChange={this.onChange} 
        />
        <Space space='3'/>
        <Input
        label="Umur" 
        type="number" 
        value={age} 
        placeholder="Input Umur Anda" 
        name="age" 
        onChange={this.onChange} 
        />
        <Space space='3'/>
      </div>
     );
  }
}

export default App;
