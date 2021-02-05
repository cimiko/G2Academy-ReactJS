import React from 'react'

function Body({children, className}) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Body
