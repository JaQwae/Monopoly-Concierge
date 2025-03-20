/**
 * Defines the steps in the multi-step form.
 * Each step contains multiple fields and a title.
 */
export const baseSteps = [
    { 
        key: 'contactInfo', 
        title: 'Contact Info',
        fields: [
            { 
                key: 'full-name', 
                label: 'Full Name', 
                type: 'text',
                autoComplete: 'name'
            },
            { 
                key: 'preferred-contact', 
                label: 'Preferred Contact Method', 
                type: 'radio',
                defaultValue: 'email',
                options: [
                    { label: 'Email', value: 'email' },
                    { label: 'Phone', value: 'phone' }
                ]
            },
            { 
                key: 'email', 
                label: 'Email', 
                type: 'email',
                autoComplete: 'email'
            },
            { 
                key: 'phoneNumber', 
                label: 'Phone Number', 
                type: 'text', 
                autoComplete: 'tel'
            },
        ] 
    },
    { 
        key: 'tripDetails', 
        title: 'Trip Details',
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
