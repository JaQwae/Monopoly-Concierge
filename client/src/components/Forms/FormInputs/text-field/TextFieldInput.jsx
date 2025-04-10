import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import './TextFieldInput.css'; // Import the new CSS file

const TextFieldInput = ({
    label,
    type,
    value,
    onChange,
    autoComplete,
    className,
    fullWidth,
    margin
}) => {
    return (
        <TextField
            label={label}
            type={type}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
            className={className}
            fullWidth={fullWidth}
            margin={margin}
        />
    );
};

TextFieldInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    autoComplete: PropTypes.string,
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
    margin: PropTypes.string,
};

TextFieldInput.defaultProps = {
    type: 'text',
    fullWidth: true,
    margin: 'normal',
};

export default TextFieldInput;
