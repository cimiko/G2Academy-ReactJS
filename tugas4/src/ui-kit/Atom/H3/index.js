import React from 'react'
import 'aos/dist/aos.css';

function H3({ children, className, anim }) {
    return (
        <h3 className={className} data-aos={anim}>{children}</h3>
    )
}

export default H3
