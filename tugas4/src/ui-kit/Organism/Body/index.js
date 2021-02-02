import React from 'react'
import style from './style.module.css'

function Body({children}) {
    return (
        <div className={style.wrap}>
            {children}
        </div>
    )
}

export default Body
