import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useInputValidation } from '../../../../hooks/useInputValidation';
import './DatePickerInput.css';

const DatePickerInput = ({ label, value, onChange, className }) => {
    const [selectedDate, setSelectedDate] = useState(value ? dayjs(value) : null);
    const latestDateRef = useRef(selectedDate);

    const { error, helperText, validate } = useInputValidation(label, 'date');

    const handleDateChange = (newValue) => {
        setSelectedDate(newValue);
        latestDateRef.current = newValue;

        // Update value in parent component for form
        if (onChange) {
            const formatted = newValue ? newValue.format('MM/DD/YYYY') : '';
            onChange(formatted);
        }
    };

    const handleBlur = () => {
        const formattedDate = selectedDate ? selectedDate.format('MM/DD/YYYY') : '';
        validate(formattedDate);
    };

    const handleClose = () => {
        const current = latestDateRef.current;
        const formattedDate = current ? current.format('MM/DD/YYYY') : '';
        validate(formattedDate);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
                label={label}
                format="MM/DD/YYYY"
                value={selectedDate}
                onChange={handleDateChange}
                onClose={handleClose}
                slots={{ textField: TextField }}
                slotProps={{
                    textField: {
                        fullWidth: true,
                        margin: 'normal',
                        className: `all-form-inputs date-picker-input ${className}`,
                        InputProps: { readOnly: false },
                        InputLabelProps: { shrink: true },
                        error: error,
                        helperText: helperText,
                        onBlur: handleBlur
                    }
                }}
            />
        </LocalizationProvider>
    );
};


DatePickerInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
};

export default DatePickerInput;
