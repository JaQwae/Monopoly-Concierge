import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import './TextFieldInput.css';

const TextFieldInput = ({
    label,
    type = 'text',
    value,
    onChange,
    autoComplete,
    className,
    fullWidth = true,
    margin = 'normal',
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

export default TextFieldInput;

