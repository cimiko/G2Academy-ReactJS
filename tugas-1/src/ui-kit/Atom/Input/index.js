import React from 'react'

const Input = ({ type, name, placeholder, className, value, min, max}) => {
    return (
        <input type={type} name={name} value={value} placeholder={placeholder} className={className} min={min} max={max} />
    )
}

export default Input
