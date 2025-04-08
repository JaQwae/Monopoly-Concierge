import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const DatePickerInput = ({ label, value, onChange, className }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
                label={label}
                format="MM/DD/YYYY"
                className={`all-form-inputs date-picker-input-container ${className}`}
                value={value ? dayjs(value) : null}
                onChange={(newValue) => onChange(newValue ? newValue.format("YYYY-MM-DD") : "")}
                slots={{
                    textField: (props) => (
                        <TextField
                            {...props}
                            fullWidth
                            margin="normal"
                            className="all-form-inputs date-picker-input"
                            InputLabelProps={{ shrink: true }} // Keeps label visible at all times
                        />
                    ),
                }}
                slotProps={{
                    textField: {
                        inputProps: {
                            style: { color: "white" }, // Ensures text inside input is white
                        },
                    },
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
