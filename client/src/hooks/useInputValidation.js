import { useState } from 'react';

export const useInputValidation = (label, value) => {
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');

    const validate = () => {
        if (!value || value.trim() === '') {
            setError(true);
            setHelperText(`${label} is required`);
        } else {
            setError(false);
            setHelperText('');
        }
    };

    return { error, helperText, validate };
};
