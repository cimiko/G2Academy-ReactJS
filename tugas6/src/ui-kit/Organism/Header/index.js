import React from 'react'

function Header({ children, className }) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Header
