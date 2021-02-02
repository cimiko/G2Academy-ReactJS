import React from 'react'
import {Nav} from 'react-bootstrap'

function NavLink({children, url}) {
    return (
        <Nav.Link href={url}>{children}</Nav.Link>
    )
}

export default NavLink
