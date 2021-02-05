import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import style from './style.module.css'

function NavBar({onInput, onSearch}) {
    return (
        <Navbar fixed="top" className={`${style.navbar}`}expand="lg">
            <Navbar.Brand href="/">CIMIKO PROJECTS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/todo">ToDo</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" name="search" className="mr-sm-2" onKeyUp={onInput} />
                    <Button variant="outline-success" onClick={onSearch}>Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
