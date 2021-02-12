import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Search } from 'ui-kit/Module'
import { Link } from 'react-router-dom'

function NavBar({ children }) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>
                <Link to='/'>
                    CIMIKO STORE
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Search />
                </Nav>
                <Nav className="mr-auto">
                    {children}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
