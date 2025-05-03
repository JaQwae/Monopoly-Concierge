import { useState } from 'react';
import { nonRequiredFields } from '../utils/validateFormFields';

export const useInputValidation = (label, type) => {
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');

    const validate = (value) => {
        if (nonRequiredFields.includes(label)) {
            setError(false);
            return true;
        }
        // Determines what validation should be run on a particular input
        switch (type) {
            case 'tel':
                validatePhoneInput(value, setError, setHelperText);
                break;
            case 'email':
                validateEmailInput(value, setError, setHelperText);
                break;
            case 'date':
                validateDateInput(value, setError, setHelperText);
                break;
            case 'time':
                validateTimeInput(value, setError, setHelperText);
                break;
            default:
                handleTextField(value, setError, setHelperText)
        }
    };

    return { error, helperText, validate };
};

// Gets rid of error messages for inputs
const clearErrorMessages = (setError, setHelperText) => {
    setError(false)
    setHelperText('')
}

// Check to see if the user left text input empty
const handleTextField = (value, setError, setHelperText) => {
    if (!value || value === '') {
        setError(true);
        setHelperText('This field is required');
    } else {
        clearErrorMessages(setError, setHelperText)
    }
}

// Check to see if the user inputted a valid phone number
const validatePhoneInput = (value, setError, setHelperText) => {
    const phoneRegex = /^(\+?1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;

    if (!phoneRegex.test(value)) {
        setError(true)
        setHelperText('Please enter a valid phone number')
    } else {
        clearErrorMessages(setError, setHelperText)
    }
}

// Check to see if the user inputted a valid email address
const validateEmailInput = (value, setError, setHelperText) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(value)) {
        setError(true)
        setHelperText('Please enter a valid email')
    } else {
        clearErrorMessages(setError, setHelperText)
    }
}

// Check to see if the user inputted a valid date
const validateDateInput = (value, setError, setHelperText) => {
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
    if (!dateRegex.test(value)) {
        setError(true)
        setHelperText('Please enter a valid date')
    } else {
        clearErrorMessages(setError, setHelperText)
    }
}

const validateTimeInput = (value, setError, setHelperText) => {
    const timeRegex = /^(0[1-9]|1[0-2]):[0-5][0-9]:(am|pm)$/i;
    if (!timeRegex.test(value)) {
        setError(true);
        setHelperText('Please enter a valid time (e.g. 03:45:pm)');
    } else {
        clearErrorMessages(setError, setHelperText);
    }
};
