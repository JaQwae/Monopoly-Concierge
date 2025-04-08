import React from 'react';
import PropTypes from 'prop-types';
import {
    FormControl,
    FormLabel,
    FormGroup,
    FormControlLabel,
    Checkbox,
} from '@mui/material';
// import './CheckboxFieldGroup.css';

const CheckboxFieldGroup = ({ field, formData, updateFormData }) => {
    const handleChange = (value, checked) => {
        const currentValues = formData[field.key] || [];
        const updatedValues = checked
            ? [...currentValues, value]
            : currentValues.filter((v) => v !== value);
        updateFormData(field.key, updatedValues);
    };

    return (
        <FormControl
            component="fieldset"
            className="all-form-inputs checkbox-input-container"
        >
            <FormLabel className="checkbox-input-title">{field.label}</FormLabel>
            <FormGroup>
                {field.options.map((option) => (
                    <FormControlLabel
                        className="checkbox-option-container"
                        key={option.value}
                        control={
                            <Checkbox
                                className="checkboxes"
                                checked={formData[field.key]?.includes(option.value) || false}
                                onChange={(e) => handleChange(option.value, e.target.checked)}
                            />
                        }
                        label={option.label}
                    />
                ))}
            </FormGroup>
        </FormControl>
    );
};

CheckboxFieldGroup.propTypes = {
    field: PropTypes.shape({
        key: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
    formData: PropTypes.object.isRequired,
    updateFormData: PropTypes.func.isRequired,
};

export default CheckboxFieldGroup;
