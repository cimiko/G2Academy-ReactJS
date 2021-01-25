import React from 'react'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'
import { Img } from 'ui-kit/Atom'
import logo from 'logo.svg'

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <Img
                    alt="logo"
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
      CIMIKO
    </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Form inline className="justify-content-end">
                    <FormControl type="text" placeholder="Ada yang mau dicari?" className=" mr-sm-2" />
                    <Button type="submit">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
