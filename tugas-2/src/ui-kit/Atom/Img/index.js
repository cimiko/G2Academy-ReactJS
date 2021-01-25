import React from 'react'

function Img({ className, alt, src, width, height}) {
    return (
        <img className={className} src={src} alt={alt} width={width} height={height} />
    )
}

export default Img
