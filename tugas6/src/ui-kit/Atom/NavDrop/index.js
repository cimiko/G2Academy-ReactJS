import React from 'react'
import { NavDropdown } from 'react-bootstrap'

function NavDrop({ children }) {
    return (
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">{children}</NavDropdown>
    )
}

export default NavDrop
