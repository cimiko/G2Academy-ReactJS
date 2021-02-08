import React from 'react'

function Input({ type, placeholder, className, name, width }) {
    return (
        <input type={type} placeholder={placeholder} className={className} name={name} size={width} />
    )
}

export default Input
