import React from 'react'
import {NavDropdown} from 'react-bootstrap'

function NavDropItem({children, url}) {
    return (
        <NavDropdown.Item href={url}>{children}</NavDropdown.Item>
    )
}

export default NavDropItem
