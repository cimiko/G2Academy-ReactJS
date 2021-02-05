import React from 'react'
import 'aos/dist/aos.css';

function H3({ className, children, anim }) {
    return (
        <h3 className={className} data-aos={anim}>{children}</h3>
    )
}

export default H3
