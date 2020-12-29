import React, {Component} from 'react';
import Home from "./home"
import { Header, Body, Footer } from './templates';

class App extends Component{
  constructor(props){
    super(props);
    this.name = "Admin"; 
  }
  render(){
    // const name = "admin";
    // const style = {backgroundColor: "red"};
    return (
      <>
        {/* <div style={{backgroundColor: "red"} }>ini contoh class component</div>
        <div style={style}>Nama saya adalah {name}</div> */}
        <Header/>
        <Body appName = {this.name} />
        <Footer/>
        {/* <Home></Home>
        <Home/> */}
      </>
    );
  }
}

export default App;
