import React from 'react'
import { NavDropdown } from 'react-bootstrap'

function NavDrop({ children, href }) {
    return (
        <NavDropdown.Item href={href}>{children}</NavDropdown.Item>
    )
}

export default NavDrop
