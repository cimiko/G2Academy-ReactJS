import React from 'react'

function Input({ type, placeholder, className, name, width, value, onChange }) {
    return (
        <input type={type} value={value} onKeyUp={onChange} placeholder={placeholder} className={className} name={name} size={width} />
    )
}

export default Input
