import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const TextFieldInput = ({
    label,
    type,
    value,
    onChange,
    autoComplete,
    className,
    fullWidth,
    margin
}) => {
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
                    color: 'var(--primary-color)',
                    '& fieldset': {
                        borderColor: 'var(--primary-color)',
                    },
                    '&:hover fieldset': {
                        borderColor: 'var(--footer-text-color)',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'var(--primary-color)',
                    },
                },
                '& .MuiInputLabel-root': {
                    color: 'var(--primary-color)',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: 'var(--primary-color)',
                },
                input: {
                    color: 'var(--primary-color)',
                },
            }}
        />
    );
};

TextFieldInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    autoComplete: PropTypes.string,
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
    margin: PropTypes.string,
};

TextFieldInput.defaultProps = {
    type: 'text',
    fullWidth: true,
    margin: 'normal',
};

export default TextFieldInput;
