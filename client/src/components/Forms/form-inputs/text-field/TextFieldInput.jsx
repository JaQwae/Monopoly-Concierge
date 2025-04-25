import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { useInputValidation } from '../../../../hooks/useInputValidation.js';
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
    prefillData
}) => {
    const [hasPrefillValue, setHasPrefillValue] = useState('');
    const displayValue = hasPrefillValue ? prefillData.carTitle : value;

    const { error, helperText, validate } = useInputValidation(label, displayValue);

    useEffect(() => {
        if (label === 'Choose Your Car') {
            setHasPrefillValue(true);
        }
    }, [label]);

    return (
        <TextField
            label={label}
            type={type}
            value={displayValue}
            onChange={onChange}
            onBlur={validate}
            autoComplete={autoComplete}
            className={className}
            fullWidth={fullWidth}
            margin={margin}
            error={error}
            helperText={helperText}
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
    prefillData: PropTypes.object,
};

export default TextFieldInput;
