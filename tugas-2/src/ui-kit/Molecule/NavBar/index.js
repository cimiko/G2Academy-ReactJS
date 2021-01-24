import React from 'react'
import { Navbar } from 'react-bootstrap'

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
      React Bootstrap
    </Navbar.Brand>
        </Navbar>
    )
}

export default NavBar
