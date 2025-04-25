import React from 'react';
import PropTypes from 'prop-types';
import {
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@mui/material';
import './RadioFieldInput.css';

const RadioFieldGroup = ({ field, formData, updateFormData }) => {
    const handleChange = (e) => {
        updateFormData(field.key, e.target.value);
    };

    return (
        <FormControl
            component="fieldset"
            className={`all-form-inputs radio-group-input-container ${field.className || ''}`}
        >
            <FormLabel className="radio-group-input-title">
                {field.label}
            </FormLabel>
            <RadioGroup
                row
                name={field.key}
                value={formData[field.key] ?? field.defaultValue ?? ''}
                onChange={handleChange}
            >
                {field.options.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                        className="radio-group-input-options"
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

RadioFieldGroup.propTypes = {
    field: PropTypes.shape({
        key: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
            })
        ).isRequired,
        defaultValue: PropTypes.string,
        className: PropTypes.string,
    }).isRequired,
    formData: PropTypes.object.isRequired,
    updateFormData: PropTypes.func.isRequired,
};

export default RadioFieldGroup;
