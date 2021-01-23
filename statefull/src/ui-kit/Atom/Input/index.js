import React from 'react';
import PropTypes from 'prop-types';

function Input({ label, type, value, name, placeholder, onChange }) {
    return (
        <>
            <label className="w3 dib">{label}</label>
            <span className="mr2">:</span>
            <input type={type} value={value} onChange={onChange} name={name} placeholder={placeholder} />
        </>
    )
}

Input.propTypes = {
    label : PropTypes.string

}

export default Input
