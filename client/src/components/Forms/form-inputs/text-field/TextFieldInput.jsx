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
    const [preFilledValue, setPreFilledValue] = useState('');
    const [hasPrefillValue, setHasPrefillValue] = useState(false);
    const displayValue = hasPrefillValue ? preFilledValue : value;

    const { error, helperText, validate } = useInputValidation(label, displayValue, type);

    // Input questions that are based on what the user selects
    useEffect(() => {
        switch (label) {
                case 'Choose Your Car':
                    setPreFilledValue(prefillData.carTitle)
                    setHasPrefillValue(true);
                    break;
                case 'Selected Service':
                    setPreFilledValue(prefillData.serviceTitle)
                    setHasPrefillValue(true);
                    break;
                default:
                    setPreFilledValue('')
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
