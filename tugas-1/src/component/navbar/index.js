import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Navbar bg="dark">
                <Navbar.Brand href="#home">
                    <img
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Navbar>
        );
    }
}

export default Nav;