import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import style from './style.module.css'

function NavBar({ children }) {
    return (
        <Navbar fixed="top" className={`${style.navbar}`} collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="#home">CIMIKO PROJECTS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    {children}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
