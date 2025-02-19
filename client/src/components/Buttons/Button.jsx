import React from 'react'
import PropTypes from 'prop-types';
import './Button.css'

const Button = (props) => {
    return (
        <button id={props.btnIdName}>{props.displayName}</button>
    )
}

Button.propTypes = {
    displayName: PropTypes.string.isRequired,
    btnIdName: PropTypes.string
}

export default Button