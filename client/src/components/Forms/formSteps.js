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
                    { label: 'Celebration (Birthday, Anniversary, Bachelor/Bachelorette, etc.)', value: 'celebration' },
                    { label: 'Other', value: 'other' }
                ]
            },
            {
                key: 'other-trip-description',
                label: 'If Other, please specify',
                type: 'text',
                condition: (formData) => formData['trip-description']?.includes('other'),
                className: 'input-text',
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
                className: 'input-radio',
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
            { key: 'special-requests', label: 'Any special requests or must-haves?', type: 'text', className: 'input-text', id: 'special-requests' },
        ]
    },
    {
        key: 'referral',
        title: 'How Did You Hear About Us?',
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
