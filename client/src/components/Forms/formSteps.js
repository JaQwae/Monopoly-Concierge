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
                key: 'preferred-destination', 
                label: 'Preferred Destination', 
                type: 'text',
                autoComplete: 'off'
            },
            { 
                key: 'number-of-guests', 
                label: 'Number of Guests', 
                type: 'select',
                options: [
                    { label: '1-2 Guest', value: '1-2 guests' },
                    { label: '3-5 Guests', value: '3-5 guests' },
                    { label: '6-10 Guests', value: '6-10 guests' },
                    { label: '10+ Guests', value: '10+ guests' }
                ]
            },
            { 
                key: 'check-in-date', 
                label: 'Check-in Date', 
                type: 'date'
            },
            { 
                key: 'check-out-date', 
                label: 'Check-out Date', 
                type: 'date'
            },
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
