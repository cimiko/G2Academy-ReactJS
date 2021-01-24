import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Img from 'ui-kit/Atom/Img';
import logo from 'logo.svg';
// import NavStyle from './nav.module.css'



const Nav = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <Img
                        src={logo}
                        width="50"
                        height="30"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                        CIMIKO
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}


export default Nav;