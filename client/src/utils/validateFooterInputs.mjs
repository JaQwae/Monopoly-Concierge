const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// export const validateFooterInputs = (formData, field) => {
//     if ((field.id !== 'state' && field.id !== 'city') &&
//         (field.value === "" || field.value === null) ||
//         (field.type === 'email' && !emailRegex.test(field.value))
//     ) {
//         field.style.borderColor = 'red';
//         return false
//     } else {
//         field.style.borderColor = 'black';
//         formData[field.id] = field.value;
//         return true;
//     }
// }

export const validateFooterInputs = (field) => {
    const { id, value, type } = field;

    const isRequiredFieldEmpty = (id !== 'state' && id !== 'city') &&
        (value === "" || value === null);
    const isInvalidEmail = type === 'email' && !emailRegex.test(value);

    const isInvalid = isRequiredFieldEmpty || isInvalidEmail;

    field.style.borderColor = isInvalid ? 'red' : 'black';
    
    return !isInvalid;
};