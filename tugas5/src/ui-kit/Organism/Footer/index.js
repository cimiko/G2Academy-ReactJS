import React from 'react'
import { H3 } from 'ui-kit/Atom'
import style from './style.module.css'

function Footer() {
    return (
        <div className={style.footer}>
            <H3 className={`${style.h3} text-center`}>&copy; Copyright Hartono</H3>
        </div>
    )
}

export default Footer
