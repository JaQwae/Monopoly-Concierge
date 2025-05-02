// Fields that the form validator will ignore
export const nonRequiredFields = [
    'other-trip-description', 'special-requests', 'referralSource',
    'company-name', 'service-type', 'budget', 'preferred-aircraft',
    'additional-info', 'concierge-opt-in', 'selected-service','how-can-we-help'
];

// Field validator for all form inputs
export default function validateFormFields(formData, setErrorMessage, fields = []) {

    if (!Array.isArray(fields)) {
        setErrorMessage('An unexpected error occurred.');
        return false;
    }

    for (const field of fields) {
        const value = formData[field.key];

        if (!value || (Array.isArray(value) && value.length === 0)) {
            if (nonRequiredFields.includes(field.key)) return true;

            setErrorMessage(`${field.label || field.key} field is required.`);
            return false;
        }
    }

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