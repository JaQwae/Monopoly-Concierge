import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import { useInputValidation } from '../../../../hooks/useInputValidation';
import './SelectFieldInput.css';

const SelectFieldInput = ({ label, value, onChange, options, className, prefillData }) => {
    const [hasPrefillValue, setHasPrefillValue] = useState('');
    const displayValue = hasPrefillValue ? prefillData.rentalCategory : value;

    const { error, helperText, validate } = useInputValidation(label, displayValue);

    useEffect(() => {
        if (label === 'Select Service') {
            setHasPrefillValue(true);
        }
    }, [label]);

    return (
        <FormControl
            fullWidth
            margin="normal"
            className={`dropdown-input-container ${className || ''}`}
            error={error}
        >
            <InputLabel className="dropdown-input-title">{label}</InputLabel>
            <Select
                value={displayValue}
                onChange={onChange}
                onBlur={validate}
                label={label}
                className="dropdown-input-select"
                MenuProps={{
                    PaperProps: {
                        className: 'dropdown-menu-container',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem
                        key={option.value}
                        value={option.value}
                        className="dropdown-menu-options"
                    >
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
            {error && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
};

SelectFieldInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    className: PropTypes.string,
    prefillData: PropTypes.object,
};

export default SelectFieldInput;
