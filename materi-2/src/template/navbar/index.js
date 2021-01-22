import React, { Component } from 'react';
import MenuBar from '../../component/menubar';
import './style.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="navbar">
                <MenuBar>Home</MenuBar>
                <MenuBar>About</MenuBar>
                <MenuBar>Contact</MenuBar>
                <MenuBar>Login</MenuBar>
            </div>
        );
    }
}

export default Navbar;