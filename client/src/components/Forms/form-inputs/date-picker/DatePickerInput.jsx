import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import './DatePickerInput.css';

const DatePickerInput = ({ label, value, onChange, className }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
                label={label}
                format="MM/DD/YYYY"
                value={value ? dayjs(value) : null}
                onChange={(newValue) => {
                    if (newValue?.isValid?.()) {
                        onChange(newValue.format("YYYY-MM-DD"));
                    }
                }}
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
