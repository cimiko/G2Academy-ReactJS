import React from 'react'
import style from './style.module.css'
import { H3 } from 'ui-kit/Atom'
import 'aos/dist/aos.css';

function Footer() {
    return (
        <div className={style.footer}>
            <H3 anim="fade-down" className={`${style.h3} text-center`}>&copy; Copyright Hartono</H3>
        </div>
    )
}

export default Footer
