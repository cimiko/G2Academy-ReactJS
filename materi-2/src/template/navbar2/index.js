import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Navbar2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        {/* <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '} */}
                        React Bootstrap
                    </Navbar.Brand>
                </Navbar>
            </>
        );
    }
}

export default Navbar2;