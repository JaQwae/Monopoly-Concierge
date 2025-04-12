import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import './SelectFieldInput.css'

const SelectFieldInput = ({ label, value, onChange, options, className}) => {
    return (
        <FormControl fullWidth={true} margin='normal' className={className}>
            <InputLabel
                sx={{
                    color: 'var(--primary-color)', //Makes label text white before clicking
                    "&.Mui-focused": { color: 'var(--primary-color)' },
                }}
            >
                {label}
            </InputLabel>
            <Select
                value={value}
                onChange={onChange}
                label={label}
                sx={{
                    color: "var(--primary-color)", // Makes selected text white
                }}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            "& .MuiList-root": {
                                padding: 0, // Removes padding from the dropdown menu
                            },
                        },
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value} className="dropdown-options">
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
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
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    className: PropTypes.string,
};



export default SelectFieldInput;
