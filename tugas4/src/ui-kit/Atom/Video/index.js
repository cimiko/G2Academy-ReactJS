import React from 'react'
import style from './style.module.css'

function Video({ file }) {
    return (
        <div className={style.wrap}>
            <video autoPlay muted loop id="myVideo">
                <source src={file} type="video/mp4" />
            </video>
        </div>
    )
}

export default Video
