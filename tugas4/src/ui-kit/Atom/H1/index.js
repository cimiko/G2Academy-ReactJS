import React from 'react'
import 'aos/dist/aos.css';

function H1({className,children, anim}) {
    return (
        <h1 className={className} data-aos={anim}>{children}</h1>
    )
}

export default H1
