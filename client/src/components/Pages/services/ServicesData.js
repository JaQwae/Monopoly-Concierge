const servicesData = [
    {
        title: 'Private Villa Rentals',
        description: 'Luxurious private villas with breathtaking views for an unforgettable stay.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFf6ZHY9d4l0M4z_ZqP2ojnFeG9ekF8LRUNg&s',
        alt: 'Private villa rental',
        link: 'https://www.yourbookingsite.com/private-villa-rentals',
        requiresTwoWeekBooking: true,
        category: 'Luxury Accommodations'
    },
    {
        title: 'Personal Concierge Services',
        description: 'Exclusive concierge services to fulfill your every need, from dining reservations to event planning.',
        image: 'https://assets.entrepreneur.com/content/3x2/2000/be-personal-concierge.jpg',
        alt: 'Personal concierge services',
        link: 'https://www.yourbookingsite.com/personal-concierge',
        requiresTwoWeekBooking: true,
        category: 'Luxury Services'
    },
    {
        title: 'Spa and Wellness Retreats',
        description: 'Relax and rejuvenate with luxurious spa treatments in serene, picturesque settings.',
        image: 'https://images.squarespace-cdn.com/content/v1/64a439dde5405e2ca5d9a1b1/67a68ece-48f1-4e07-a1cc-eb57ead1b0bc/SHA+Wellness.jpg',
        alt: 'Spa and wellness retreat',
        link: 'https://www.yourbookingsite.com/spa-wellness-retreats',
        requiresTwoWeekBooking: true,
        category: 'Wellness'
    },
    {
        title: 'Gourmet Dining Experiences',
        description: 'Indulge in world-class culinary experiences with private chefs and personalized menus.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEzphar8sQTqOM8UXm7-gXhvylM8sjptLT_Q&s',
        alt: 'Gourmet dining',
        link: 'https://www.yourbookingsite.com/gourmet-dining',
        requiresTwoWeekBooking: true,
        category: 'Dining'
    },
    {
        title: 'Helicopter Tours',
        description: 'Experience a stunning aerial view of your destination with our exclusive helicopter tours.',
        image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/f0/69/b3.jpg',
        alt: 'Helicopter tour',
        link: 'https://www.yourbookingsite.com/helicopter-tours',
        requiresTwoWeekBooking: true,
        category: 'Exclusive Experiences'
    },
    {
        title: 'Yacht Charters',
        description: 'Set sail on a luxurious private yacht for a truly unforgettable experience on the water.',
        image: 'https://luxuryliners.com/wp-content/uploads/101-Azimut-Newport-Beach-Luxury-Yacht-633x420.jpg',
        alt: 'Yacht charter',
        link: 'https://www.yourbookingsite.com/yacht-charters',
        requiresTwoWeekBooking: true,
        category: 'Exclusive Experiences'
    },
    {
        title: 'Private Jet Services',
        description: 'Travel in style and comfort with private jet charters tailored to your schedule.',
        image: 'https://private-jets.pro/assets/images/home/private-jet-rent.jpg',
        alt: 'Private jet',
        link: 'https://www.yourbookingsite.com/private-jet-services',
        requiresTwoWeekBooking: true,
        category: 'Travel'
    },
    {
        title: 'Luxury Chauffeur Services',
        description: 'Enjoy the comfort and convenience of being driven in a luxury vehicle by a professional chauffeur.',
        image: 'https://mphclub.com/wp-content/uploads/2020/09/rolls-royce-phantom-rental-chauffeur-services-mph-club.webp',
        alt: 'Luxury chauffeur service',
        link: 'https://www.yourbookingsite.com/luxury-chauffeur',
        requiresTwoWeekBooking: true,
        category: 'Travel'
    },
    {
        title: 'Personalized Shopping Experience',
        description: 'Indulge in a private shopping spree with the guidance of a personal shopper.',
        image: 'https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2024-02/logo_0.jpg?VersionId=43gweefyzy.FYmNrS1Wrm7qk5whr6188&h=ad768323&size=750:*',
        alt: 'Personal shopping experience',
        link: 'https://www.yourbookingsite.com/personalized-shopping',
        requiresTwoWeekBooking: false,
        category: 'Luxury Services'
    },
    {
        title: 'Private Art Tours',
        description: 'Explore art collections with a private tour guide and access to exclusive exhibitions.',
        image: 'https://babylontours.com/wp-content/uploads/2017/12/National-Gallery-Of-Art-Tour-Washington-DC-900x600.jpg',
        alt: 'Private art tour',
        link: 'https://www.yourbookingsite.com/private-art-tours',
        requiresTwoWeekBooking: true,
        category: 'Exclusive Experiences'
    },
    {
        title: 'Luxury Wellness Packages',
        description: 'Experience rejuvenating wellness treatments designed for ultimate relaxation and vitality.',
        image: 'https://adagold.com.au/wp-content/uploads/2024/12/adagold-australian-luxury-retreats.jpg',
        alt: 'Luxury wellness treatment',
        link: 'https://www.yourbookingsite.com/luxury-wellness-packages',
        requiresTwoWeekBooking: false,
        category: 'Wellness'
    },
    {
        title: 'Custom-Made Jewelry',
        description: 'Design your own one-of-a-kind piece with the help of our expert jewelers.',
        image: 'https://www.providencediamond.com/images/custom-design-img.png',
        alt: 'Custom jewelry design',
        link: 'https://www.yourbookingsite.com/custom-made-jewelry',
        requiresTwoWeekBooking: false,
        category: 'Luxury Services'
    },
    {
        title: 'Private Wine Tastings',
        description: 'Experience the finest wines from around the world with a personalized wine-tasting experience.',
        image: 'https://images.squarespace-cdn.com/content/v1/55ae9aa7e4b0485b4e8a37a4/1467083582692-MNSS87H9TCCHK4TVT54E/Private+Wine+Tasting+Event+Sommelier+Wine+Expert+London',
        alt: 'Private wine tasting',
        link: 'https://www.yourbookingsite.com/private-wine-tastings',
        requiresTwoWeekBooking: true,
        category: 'Dining'
    },
    {
        title: 'Luxury Golf Packages',
        description: 'Enjoy a round of golf at some of the most exclusive courses, complete with a personal caddie.',
        image: 'https://www.elegantgolfresorts.com/app/uploads/2019/08/all-inclusive-golf-holidays.jpg',
        alt: 'Luxury golf package',
        link: 'https://www.yourbookingsite.com/luxury-golf-packages',
        requiresTwoWeekBooking: true,
        category: 'Exclusive Experiences'
    },
    {
        title: 'Bespoke Travel Planning',
        description: 'Create a personalized travel itinerary tailored to your tastes and preferences.',
        image: 'https://images.squarespace-cdn.com/content/v1/5662191ce4b0d8f09481c9a5/1451529871065-PSIELLJSFQ3I87ED7IKM/IMG_3929.JPG?format=1500w',
        alt: 'Bespoke travel planning',
        link: 'https://www.yourbookingsite.com/bespoke-travel-planning',
        requiresTwoWeekBooking: false,
        category: 'Travel'
    }
];

export default servicesData;
