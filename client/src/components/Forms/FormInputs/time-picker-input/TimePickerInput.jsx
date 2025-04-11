import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { LocalizationProvider, DesktopTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import './TimePickerInput.css'; // Reuse CSS for consistent styling

const TimePickerInput = ({ label, value, onChange, className }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopTimePicker
                label={label}
                ampm={true}
                className={`all-form-inputs time-picker-input-container ${className}`}
                value={value ? dayjs(value, 'HH:mm') : null}
                onChange={(newValue) => {
                    if (newValue?.isValid?.()) {
                        onChange(newValue.format("HH:mm"));
                    }
                }}
                renderInput={(props) => (
                    <TextField
                        {...props}
                        fullWidth
                        margin="normal"
                        className="all-form-inputs time-picker-input"
                        InputLabelProps={{ shrink: true }}
                        InputProps={{
                            ...props.InputProps,
                            readOnly: false, // Allow typing while keeping icon visible
                        }}
                    />
                )}
            />
        </LocalizationProvider>
    );
};

TimePickerInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    InputProps: PropTypes.object,
};

export default TimePickerInput;
