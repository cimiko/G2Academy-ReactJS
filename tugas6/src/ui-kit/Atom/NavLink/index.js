import React from 'react'
import { Nav } from 'react-bootstrap'

function NavLink({ children, href }) {
    return (
        <Nav.Link href={href}>{children}</Nav.Link>
    )
}

export default NavLink
