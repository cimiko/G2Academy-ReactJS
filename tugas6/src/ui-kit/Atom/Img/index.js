import React from 'react'

function Img({ src, alt, className, width, height }) {
    return (
        <img src={src} alt={alt} className={className} width={width} height={height} />
    )
}

export default Img
