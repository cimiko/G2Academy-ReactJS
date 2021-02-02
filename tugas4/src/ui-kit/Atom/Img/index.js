import React from 'react'
import 'aos/dist/aos.css';

function Img({src, alt, className, width, height, anim}) {
    return (
        <img data-aos={anim} src={src} alt={alt} className={className} width={width} height={height}/>
    )
}

export default Img
