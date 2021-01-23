import React from 'react'

function Button({children, type, className, btnType}) {
    const className = type === 'primary' ? BtnStyle.primary : BtnStyle.secondary;
    return (
        <button className={`${BtnStyle.btn} ${className}`}>{children}</button>
    )
}

export default Button
