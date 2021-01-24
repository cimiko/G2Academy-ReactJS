import React from 'react'

function Img({ className, alt, src }) {
    return (
        <img className={className} src={src} alt={alt} />
    )
}

export default Img
