import React from 'react'
import PropTypes from 'prop-types';
import './Button.css'

const Button = (props) => {
    console.log(props.btnIdName)
    return (
        <button id={props.btnIdName}>BOOK</button>
    )
}

Button.propTypes = {
    btnIdName: PropTypes.string
}

export default Button