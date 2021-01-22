import React, { Component } from 'react';
import './App.css';
// import img from './img/wee.jpeg';
import Header, {Header2} from './template/header'
import Body from './template/body'
import Navbar from './template/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from './template/navbar2';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//   }
//   render() {
//     const world = "World!!"
//     const styleDiv = {color: "red"}
//     return (
//       <div style={{marginTop: "100pt"}}>
//         <div style={styleDiv}>Hello World!</div>
//         <div>Hello {world}!!</div>
//         <img src={img} alt={"error"} />
//       </div>
//     );
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <>
        <Navbar2></Navbar2>
        <Header></Header>
        <Header2></Header2>
        <Navbar></Navbar>
        <Body></Body>
      </>
    );
  }
}

export default App;
