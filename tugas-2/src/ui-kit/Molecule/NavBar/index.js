import React from 'react'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'
import { Img } from 'ui-kit/Atom'
import logo from 'logo.svg'
import PropTypes from 'prop-types';

function NavBar({ search, btnSearch }) {
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
                    <FormControl type="text" placeholder="Ada yang mau dicari?" className=" mr-sm-2" onKeyUp={search} />
                    <Button type="submit" onClick={btnSearch}>Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

NavBar.propTypes = {
    search: PropTypes.func,
    btnSearch: PropTypes.func
}

export default NavBar
