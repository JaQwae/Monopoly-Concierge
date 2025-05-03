// Fields that the form validator will ignore
export const nonRequiredFields = [
    'If Other, please specify', 'Any special requests or must-haves', 'Company Name',
    'charter info', 'Do you have a preferred aircraft', 'Additional Information',
    'Opt-in to Concierge Chronicles Newsletter', 'Select Service', 'Choose Your Car',
    'Selected Service', 'How Can We Help'
];

// Field validator for all form inputs
export default function validateFormFields(formData, setErrorMessage, fields = []) {
    if (!Array.isArray(fields)) {
        setErrorMessage('An unexpected error occurred.');
        return false;
    }

    for (const { key, label } of fields) {
        const value = formData[key];
        const isEmpty = !value || (Array.isArray(value) && value.length === 0);
        
        if (isEmpty && !nonRequiredFields.includes(label)) {
            setErrorMessage(`${label || key} field is required.`);
            return false;
        }
    }

    // If all required fields are filled
    setErrorMessage(null);
    return true;
}


// Field validator for jet widget inputs
export const validateJetWidgetInputs = (formData) => {
    if (!formData || typeof formData !== 'object') {
        return false;
    }

    // Checks if inputs are empty
    for (const key of Object.keys(formData)) {
        if (!formData[key]?.trim()) {
            return false;
        }
    }

    return true;
};