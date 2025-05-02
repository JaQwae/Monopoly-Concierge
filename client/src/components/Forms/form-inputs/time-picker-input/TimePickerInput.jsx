import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { LocalizationProvider, DesktopTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useInputValidation } from '../../../../hooks/useInputValidation';
import './TimePickerInput.css';

const TimePickerInput = ({ label, value, onChange, className }) => {
    const [selectedTime, setSelectedTime] = useState(value ? dayjs(value, 'hh:mm:a') : null);
    const latestTimeRef = useRef(selectedTime);

    const { error, helperText, validate } = useInputValidation(label, 'time');

    const handleTimeChange = (newValue) => {
        setSelectedTime(newValue);
        latestTimeRef.current = newValue;

        if (onChange) {
            const formatted = newValue ? newValue.format('hh:mm:a') : '';
            onChange(formatted);
        }
    };

    const handleBlur = () => {
        const formattedTime = selectedTime ? selectedTime.format('hh:mm:a') : '';
        validate(formattedTime);
    };

    const handleClose = () => {
        const current = latestTimeRef.current;
        const formattedTime = current ? current.format('hh:mm:a') : '';
        validate(formattedTime);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopTimePicker
                label={label}
                ampm={true}
                value={selectedTime}
                onChange={handleTimeChange}
                onClose={handleClose}
                slots={{ textField: TextField }}
                slotProps={{
                    textField: {
                        fullWidth: true,
                        margin: 'normal',
                        className: `all-form-inputs time-picker-input-container ${className}`,
                        InputProps: { readOnly: false },
                        InputLabelProps: { shrink: true },
                        error: error,
                        helperText: helperText,
                        onBlur: handleBlur,
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
};

export default TimePickerInput;
