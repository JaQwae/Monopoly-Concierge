import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { LocalizationProvider, DesktopTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useInputValidation } from '../../../../hooks/useInputValidation'; // Import the validation hook
import './TimePickerInput.css';

const TimePickerInput = ({ label, value, onChange, className }) => {
    const { error, helperText, validate } = useInputValidation(label, value);
    const [selectedTime, setSelectedTime] = useState(value || null);

    // Handle time change
    const handleTimeChange = (newValue) => {
        if (newValue?.isValid?.()) {
            const formattedTime = newValue.format("HH:mm");
            setSelectedTime(formattedTime);
            onChange(formattedTime);
        }
    };

    // Trigger validation when time picker is closed or loses focus
    const handleBlur = () => {
        if (!selectedTime || selectedTime.trim() === '') {
            validate(); // Trigger validation on blur if no value
        }
    };

    const handleTimeAccept = () => {
        validate(); // Trigger validation when the user selects a time
    };

    const handleClose = () => {
        // Ensure validation runs on close, when no time has been selected
        if (!selectedTime || selectedTime.trim() === '') {
            validate(); // Trigger validation on close
        }
    };

    // Handle component mount and ensure selectedTime is set correctly
    useEffect(() => {
        if (selectedTime === undefined) {
            setSelectedTime(''); // Initialize with empty string if undefined
        }
    }, [selectedTime]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopTimePicker
                label={label}
                ampm={true}
                className={`all-form-inputs time-picker-input-container ${className}`}
                value={selectedTime ? dayjs(selectedTime, 'HH:mm') : null}
                onChange={handleTimeChange}
                onAccept={handleTimeAccept} // Trigger validation when time is selected
                onClose={handleClose} // Trigger validation when the picker is closed
                slots={{
                    textField: TextField, // Use the textField slot here instead of renderInput
                }}
                slotProps={{
                    textField: {
                        fullWidth: true,
                        margin: 'normal',
                        className: "all-form-inputs time-picker-input",
                        InputLabelProps: { shrink: true },
                        InputProps: {
                            readOnly: false, // Allow typing while keeping icon visible
                        },
                        error: error, // Apply error styling when validation fails
                        helperText: helperText, // Show helper text for error message
                        onBlur: handleBlur, // Ensure validation when focus is lost
                    }
                }}
            />
        </LocalizationProvider>
    );
};

TimePickerInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    // InputProps: PropTypes.object,
};

export default TimePickerInput;
