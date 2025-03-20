/**
 * Defines the steps in the multi-step form.
 * Each step contains multiple fields and a title.
 */
export const baseSteps = [
    { 
        key: 'personalInfo', 
        title: 'Personal Information',
        fields: [
            { 
                key: 'given-name', 
                label: 'First Name', 
                type: 'text',
                autoComplete: 'given-name'
            },
            { 
                key: 'lastName', 
                label: 'Last Name', 
                type: 'text',
                autoComplete: 'family-name'
            }
        ] 
    },
    { 
        key: 'contactInfo', 
        title: 'Contact Information',
        fields: [
            { 
                key: 'email', 
                label: 'Email', 
                type: 'email',
                autoComplete: 'email'
            },
            { 
                key: 'phone', 
                label: 'Phone Number', 
                type: 'tel',
                autoComplete: 'tel'
            }
        ] 
    },
    { 
        key: 'security', 
        title: 'Security Settings',
        fields: [
            { 
                key: 'password', 
                label: 'Password', 
                type: 'password',
                autoComplete: 'new-password'
            },
            { 
                key: 'confirmPassword', 
                label: 'Confirm Password', 
                type: 'password',
                autoComplete: 'new-password'
            }
        ] 
    }
];
