import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const TetFieldInput = ({ label, type, value, onChange, autoComplete, className, fullWidth, margin }) => {
    return (
        <TextField
            label={label}
            type={type}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
            className={className}
            fullWidth={fullWidth}
            margin={margin}
            sx={{
                "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": { borderColor: "white" },
                    "&:hover fieldset": { borderColor: "gray" },
                    "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiInputLabel-root.Mui-focused": { color: "white" },
                input: {
                    color: "white", 
                },
            }}
        />
    );
};

TetFieldInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    autoComplete: PropTypes.string,
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
    margin: PropTypes.string
};

TetFieldInput.defaultProps = {
    type: 'text',
    fullWidth: true,
    margin: 'normal'
};

export default TetFieldInput;
