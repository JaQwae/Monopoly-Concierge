import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import './TextAreaInput.css';

const TextAreaInput = ({
    label,
    value,
    onChange,
    rows = 4,
    className,
    fullWidth = true,
    margin = 'normal',
}) => {
    return (
        <TextField
            label={label}
            value={value}
            onChange={onChange}
            multiline
            rows={rows}
            className={className}
            fullWidth={fullWidth}
            margin={margin}
        />
    );
};

TextAreaInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    rows: PropTypes.number,
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
    margin: PropTypes.string,
};

export default TextAreaInput;
