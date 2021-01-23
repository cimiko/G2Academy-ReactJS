import React from 'react'
import BtnStyle from './Button.module.css';
// import PropTypes from 'prop-types';

function Button({children, type}) {
    const className = type === 'primary' ? BtnStyle.primary : BtnStyle.secondary;
    return (
        <button className={`${BtnStyle.btn} ${className}`}>{children}</button>
    )
}

// Button.propTypes

export default Button;
