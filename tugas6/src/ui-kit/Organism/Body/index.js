import React from 'react'

function Body({ className, children }) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Body
