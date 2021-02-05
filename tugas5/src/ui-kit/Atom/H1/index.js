import React from 'react'

function H1({ children, className, anim }) {
    return (
        <h1 className={className} data-aos={anim}>{children}</h1>
    )
}

export default H1
