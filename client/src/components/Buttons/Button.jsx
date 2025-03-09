import React from 'react'
import PropTypes from 'prop-types';
import './Button.css'

const Button = (props) => {
    return (
        <button id={props.btnIdName} onClick={props.btnAction}>
            {props.displayName}
        </button>
    )
}

Button.propTypes = {
    displayName: PropTypes.string.isRequired,
    btnIdName: PropTypes.string,
    btnAction: PropTypes.func
}

export default Button