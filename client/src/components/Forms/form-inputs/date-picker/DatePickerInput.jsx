import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useInputValidation } from '../../../../hooks/useInputValidation';
import './DatePickerInput.css';

const DatePickerInput = ({ label, value, onChange, className }) => {
    const { error, helperText, validate } = useInputValidation(label, value);

    const handleDateChange = (newValue) => {
        if (newValue?.isValid?.()) {
            onChange(newValue.format("MM/DD/YYYY"));
        }
    };

    const handleClose = () => {
        // Trigger validation when calendar closes
        validate();
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
                label={label}
                format="MM/DD/YYYY"
                value={value ? dayjs(value) : null}
                onChange={handleDateChange}
                onClose={handleClose} // Trigger validation when the calendar is closed
                slots={{
                    textField: TextField, // Directly assign TextField to the textField slot
                }}
                slotProps={{
                    textField: {
                        fullWidth: true,
                        margin: 'normal',
                        className: `all-form-inputs date-picker-input ${className}`,
                        InputProps: {
                            readOnly: false,
                        },
                        InputLabelProps: {
                            shrink: true, // Label should shrink when the field has value
                        },
                        error: error, // Apply error styling when validation fails
                        helperText: helperText, // Show helper text for error message
                        onBlur: validate, // Attach the onBlur event for validation (optional)
                    }
                }}
            />
        </LocalizationProvider>
    );
};

DatePickerInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
};

export default DatePickerInput;
