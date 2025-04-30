import { useState } from 'react';

export const useInputValidation = (label, value, type) => {
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');
    
    // console.log(value)
    
    const validate = () => {
        // if field is left empty
        if (!value || value.trim() === '') {
            setError(true);
            setHelperText(`${label} is required`);
            return;
        }

        // Determines what validation should be run on a particular input
        switch (type) {
            case 'tel':
                validatePhoneInput(value, setError, setHelperText);
                break;
            case 'email':
                validateEmailInput(value, setError, setHelperText);
                break;
            default:
                if (value || value.trim() !== '') {
                    clearErrorMessages(setError, setHelperText)
                }
        }
    };

    return { error, helperText, validate };
};

// Gets rid of error messages for inputs
const clearErrorMessages = (setError, setHelperText) => {
    setError(false) 
    setHelperText('')
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