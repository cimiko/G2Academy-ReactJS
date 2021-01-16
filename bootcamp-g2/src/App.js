import React, { Component } from 'react';
import { Header, Body, Footer } from './templates';
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.name = "Admin";
  }

  render() {

    // const name = "admin";
    // const style = {backgroundColor: "red"};
    return (
      <>  
          <Header />
          <Body appName={this.name} />
          <Footer />
      </>
    );
  }
}

export default App;
