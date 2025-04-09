import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
    return (
        <button 
            id={props.btnIdName}
            className={props.btnClassName}
            onClick={props.btnAction}
        >
            {props.displayName}
        </button>
    );
};

Button.propTypes = {
    displayName: PropTypes.node.isRequired, // PropTypes.node for strings or JSX elements
    btnIdName: PropTypes.string,
    btnAction: PropTypes.func,
    btnClassName: PropTypes.string
};

export default Button;