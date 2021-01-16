import React, { Component } from 'react';
import "./style.css";
import "./img/profile.jpg";

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div id="border-header"></div>
        <p id="resume">RESUME</p>
        <div class="row" id="name">
          <div class="col-3">
            <div class="profile-img">
              <img src="./img/profile.jpg" alt=""/>
            </div>
          </div>
          <div class="col-9">
            <h1>HARTONO</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;