import React from 'react'
import SpanStyle from './style.module.css'

function Span({children, className, type}) {
    const cn = type === 'icon' ? SpanStyle.yellow : SpanStyle.grey
    return (
        <span className={`${cn} ${className}`}>{children}</span>
    )
}

export default Span
