import React from 'react'

const Input = ({ type, name, placeholder, className, value, min, max, onChange}) => {
    return (
        <input type={type} name={name} value={value} placeholder={placeholder} className={className} min={min} max={max} onChange={onChange} />
    )
}

export default Input
