export const baseSteps = [
    {
        key: 'contactInfo',
        title: 'Contact Info',
        fields: [
            {
                key: 'full-name',
                label: 'Full Name',
                type: 'text',
                autoComplete: 'name',
                className: 'input-text',
                id: 'full-name'
            },
            {
                key: 'preferred-contact',
                label: 'Preferred Contact Method',
                type: 'radio',
                defaultValue: 'email',
                className: 'input-radio',
                id: 'preferred-contact',
                options: [
                    { label: 'Email', value: 'email' },
                    { label: 'Phone', value: 'phone' }
                ]
            },
            {
                key: 'email',
                label: 'Email',
                type: 'email',
                autoComplete: 'email',
                className: 'input-text',
                id: 'email'
            },
            {
                key: 'phoneNumber',
                label: 'Phone Number',
                type: 'text',
                autoComplete: 'tel',
                className: 'input-text',
                id: 'phoneNumber'
            },
        ]
    },
    {
        key: 'tripDetails',
        title: 'Trip Details',
        fields: [
            { key: 'preferred-destination', label: 'Preferred Destination', type: 'text', autoComplete: 'off', className: 'input-text', id: 'preferred-destination' },
            {
                key: 'number-of-guests',
                label: 'Number of Guests',
                type: 'select',
                className: 'input-select',
                id: 'number-of-guests',
                options: [
                    { label: '1-2 Guests', value: '1-2 guests' },
                    { label: '3-5 Guests', value: '3-5 guests' },
                    { label: '6-10 Guests', value: '6-10 guests' },
                    { label: '10+ Guests', value: '10+ guests' }
                ]
            },
            { key: 'check-in-date', label: 'Check-in Date', type: 'date', className: 'input-date', id: 'check-in-date' },
            { key: 'check-out-date', label: 'Check-out Date', type: 'date', className: 'input-date', id: 'check-out-date' },
        ]
    },
    {
        key: 'tripPreferences',
        title: 'Trip Preferences',
        fields: [
            {
                key: 'trip-description',
                label: 'What best describes your trip?',
                type: 'checkbox',
                className: 'input-checkbox',
                id: 'trip-description',
                options: [
                    { label: 'Leisure / Relaxation', value: 'leisure' },
                    { label: 'Business Travel', value: 'business' },
                    { label: 'Touring & Group Housing (For music artists, entourages, or crews)', value: 'touring' },
                    { label: 'Romantic Escape', value: 'romantic' },
                    { label: 'Celebration (Birthday, Anniversary, Bachelor / Bachelorette, etc.)', value: 'celebration' },
                    { label: 'Other', value: 'other' }
                ]
            },
            {
                key: 'other-trip-description',
                label: 'If Other, please specify',
                type: 'text',
                condition: (formData) => formData['trip-description']?.includes('other'),
                className: 'input-text checkbox-text-input',
                id: 'other-trip-description'
            },
        ]
    },
    {
        key: 'tripPreferences2',
        title: 'Trip Preferences',
        fields: [
            {
                key: 'exclusivity-level',
                label: 'What level of exclusivity do you prefer?',
                type: 'radio',
                defaultValue: 'no-preference',
                className: 'not-centered',
                id: 'exclusivity-level',
                options: [
                    { label: 'Iconic Luxury (5-star hotels, top-tier brands like Four Seasons, Aman, etc.)', value: 'iconic-luxury' },
                    { label: 'Hidden Gems (Boutique, ultra-private accommodations)', value: 'hidden-gems' },
                    { label: 'Ultra-Exclusive (Private estates, VIP-only accommodations)', value: 'ultra-exclusive' },
                    { label: 'No Preference – Just Make It Unforgettable', value: 'no-preference' }
                ]
            },
        ]
    },
    {
        key: 'tripPreferences3',
        title: 'Trip Preferences',
        fields: [
            {
                key: 'additional-services',
                label: 'Would you like to include additional services?',
                type: 'checkbox',
                className: 'input-checkbox',
                id: 'additional-services',
                options: [
                    { label: 'Private Jet Charter', value: 'private-jet' },
                    { label: 'Exotic Car Rental', value: 'exotic-car' },
                    { label: 'Exclusive Experiences (Dining, Events, VIP Access, etc.)', value: 'exclusive-experiences' },
                    { label: 'Security Detail', value: 'security-detail' },
                    { label: 'Private Chef', value: 'private-chef' },
                    { label: 'No Additional Services Needed', value: 'no-services' }
                ]
            },
            {
                key: 'special-requests',
                label: 'Any special requests or must-haves?',
                type: 'text',
                className: 'input-text checkbox-text-input',
                id: 'special-requests'
            },
        ]
    },
    {
        key: 'referral',
        title: 'Referral',
        fields: [
            {
                key: 'referralSource',
                label: 'How did you hear about us?',
                type: 'select',
                className: 'input-select',
                id: 'referralSource',
                options: [
                    { label: 'Instagram', value: 'Instagram' },
                    { label: 'TikTok', value: 'TikTok' },
                    { label: 'Referral', value: 'Referral' },
                    { label: 'Other', value: 'Other' }
                ]
            }
        ]
    }
];

export const serviceFormSteps = [
    {
        key: 'contactInfo',
        title: 'Contact Info',
        fields: [
            {
                key: 'full-name',
                label: 'Full Name',
                type: 'text',
                autoComplete: 'name',
                className: 'input-text',
                id: 'full-name'
            },
            {
                key: 'email',
                label: 'Email',
                type: 'email',
                autoComplete: 'email',
                required: true,
                className: 'input-text',
                id: 'email'
            },
            {
                key: 'phone-number',
                label: 'Phone Number',
                type: 'text',
                autoComplete: 'tel',
                className: 'input-text',
                id: 'phone-number'
            }
        ]
    },
    {
        key: 'serviceDetails',
        title: 'Service Details',
        fields: [
            {
                key: 'service-interested',
                label: 'Service Interested In',
                type: 'text',
                readOnly: true,
                className: 'input-text',
                id: 'service-interested'
            },
            {
                key: 'preferred-date',
                label: 'Preferred Date',
                type: 'date',
                required: true,
                className: 'input-date',
                id: 'preferred-date'
            },
            {
                key: 'how-can-we-help',
                label: 'How Can We Help?',
                type: 'textarea',
                className: 'input-textarea',
                id: 'how-can-we-help'
            },
        ]
    },
    {
        key: 'serviceDetails',
        title: 'Service Details',
        fields: [
            {
                key: 'booking-status',
                label: 'Booking Status',
                type: 'radio',
                className: 'input-radio',
                id: 'booking-status',
                options: [
                    { label: 'I have a reservation.', value: 'have-reservation' },
                    { label: 'I am planning to book.', value: 'planning-to-book' }
                ]
            },

        ]
    }
];

export const carReservationSteps = [
    {
        key: 'contactInfo',
        title: 'Contact Info',
        fields: [
            {
                key: 'full-name',
                label: 'Full Name',
                type: 'text',
                autoComplete: 'name',
                className: 'input-text',
                id: 'full-name'
            },
            {
                key: 'phone-number',
                label: 'Phone Number',
                type: 'text',
                autoComplete: 'tel',
                className: 'input-text',
                id: 'phone-number'
            },
            {
                key: 'email',
                label: 'Email',
                type: 'email',
                autoComplete: 'email',
                className: 'input-text',
                id: 'email'
            }
        ]
    },
    {
        key: 'reservationDetails',
        title: 'Reservation Details',
        fields: [
            {
                key: 'pickup-date',
                label: 'Pick-Up Date',
                type: 'date',
                className: 'input-date',
                id: 'pickup-date'
            },
            {
                key: 'dropOff-date',
                label: 'Drop-Off Date',
                type: 'date',
                className: 'input-date',
                id: 'dropOff-date'
            },
            {
                key: 'service-type',
                label: 'Select Service',
                type: 'select',
                className: 'input-select',
                id: 'service-type',
                options: [
                    { label: 'Car Rental', value: 'car-rental' },
                    { label: 'Chauffeured Vehicles', value: 'chauffeured' }
                ]
            },
            {
                key: 'car-selection',
                label: 'Choose Your Car',
                type: 'select',
                className: 'input-select',
                id: 'car-selection',
                autoSelectFrom: 'reserve-now', // this can be logic-triggered in the form code
                options: [
                    { label: 'Rolls-Royce Ghost', value: 'rolls-ghost' },
                    { label: 'Mercedes-Benz S580', value: 'benz-s580' },
                    { label: 'Cadillac Escalade', value: 'cadillac-escalade' },
                    { label: 'Lamborghini Urus', value: 'lamborghini-urus' }
                    // More cars can be added here
                ]
            }
        ]
    }
];

export const charterFormSteps = [
    {
        key: 'contactInfo',
        title: 'Contact Info',
        fields: [
            {
                key: 'full-name',
                label: 'Full Name',
                type: 'text',
                autoComplete: 'name',
                className: 'input-text',
                id: 'full-name'
            },
            {
                key: 'company-name',
                label: 'Company Name',
                type: 'text',
                className: 'input-text',
                id: 'company-name'
            }
        ]
    },
    {
        key: 'contactInfo',
        title: 'Contact Info',
        fields: [
            {
                key: 'email',
                label: 'Email',
                type: 'email',
                autoComplete: 'email',
                className: 'input-text',
                id: 'email'
            },
            {
                key: 'phoneNumber',
                label: 'Phone Number',
                type: 'text',
                autoComplete: 'tel',
                className: 'input-text',
                id: 'phoneNumber'
            },
            {
                key: 'preferred-contact',
                label: 'Preferred Contact Method',
                type: 'radio',
                defaultValue: 'email',
                className: 'input-radio',
                id: 'preferred-contact',
                options: [
                    { label: 'Email', value: 'email' },
                    { label: 'Phone', value: 'phone' }
                ]
            },
        ]
    },
    {
        key: 'tripDetails',
        title: 'Trip Details',
        fields: [
            {
                key: 'departure-date',
                label: 'Departure Date',
                type: 'date',
                className: 'input-date',
                id: 'departure-date'
            },
            {
                key: 'departure-time',
                label: 'Departure Time',
                type: 'time',
                className: 'input-time',
                id: 'departure-time'
            },
            {
                key: 'return-date',
                label: 'Return Date',
                type: 'date',
                className: 'input-date',
                id: 'return-date'
            },
            {
                key: 'return-time',
                label: 'Return Time',
                type: 'time',
                className: 'input-time',
                id: 'return-time'
            },
        ]
    },
    {
        key: 'preferences',
        title: 'Preferences & Requests',
        fields: [
            {
                key: 'transportation-needed',
                label: 'Do you need transportation services for departure and/or arrival?',
                type: 'radio',
                defaultValue: 'no',
                className: 'input-radio two-question-screen',
                id: 'transportation-needed',
                options: [
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' }
                ]
            },
            {
                key: 'wifi-needed',
                label: 'Do you need Wi-Fi?',
                type: 'radio',
                defaultValue: 'no',
                className: 'input-radio two-question-screen',
                id: 'wifi-needed',
                options: [
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' }
                ]
            },
        ]
    },
    {
        key: 'preferences2',
        title: 'Preferences & Requests',
        fields: [
            {
                key: 'traveling-with-pets',
                label: 'Are you traveling with pets?',
                type: 'radio',
                defaultValue: 'no',
                className: 'input-radio two-question-screen',
                id: 'traveling-with-pets',
                options: [
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' }
                ]
            },
            {
                key: 'catering-needed',
                label: 'Do you need catering?',
                type: 'radio',
                defaultValue: 'no',
                className: 'input-radio two-question-screen',
                id: 'catering-needed',
                options: [
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' }
                ]
            }
        ]
    },
    {
        key: 'preferences',
        title: 'Preferences & Requests',
        fields: [
            {
                key: 'chartered-before',
                label: 'Have you chartered before?',
                type: 'radio',
                className: 'input-radio',
                id: 'chartered-before',
                options: [
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' }
                ]
            },
            {
                key: 'budget',
                pTextValue: 'Charter flights start around $10,000 one way',
                type: 'p',
                className: 'form-p-text',
            }
        ]
    },
    {
        key: 'preferences',
        title: 'Preferences & Requests',
        fields: [
            {
                key: 'preferred-aircraft',
                label: 'Have a preferred aircraft?',
                type: 'text',
                className: 'input-text',
                id: 'preferred-aircraft'
            },
            {
                key: 'additional-info',
                label: 'Additional Information',
                type: 'textarea',
                className: 'input-textarea',
                id: 'additional-info'
            }
        ]
    },

    {
        key: 'concierge',
        title: 'Concierge Chronicles',
        fields: [
            {
                key: 'concierge-opt-in',
                label: 'Opt-in to Concierge Chronicles Newsletter',
                type: 'checkbox',
                defaultValue: 'yes',
                className: 'input-checkbox',
                id: 'concierge-opt-in',
                options: [
                    { label: 'Yes, I want to receive exclusive travel inspiration and luxury experiences.', value: 'yes' }
                ]
            }
        ]
    }
];
