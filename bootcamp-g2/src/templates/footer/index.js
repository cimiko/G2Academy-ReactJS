import React, { Component } from 'react';
import "./style.css"

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="footer">&copy; Copyright 2020</div>
      </>
    );
  }
}

export default Footer;